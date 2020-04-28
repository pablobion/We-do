import React, {Component} from 'react'
import axios from 'axios'
import Menu from './menu.js'
import Painel from './painel.js'


const URL = 'http://localhost:3333/api/cards/'


export default class Cards extends Component {
    
    constructor(props){
        super(props)
        this.zoomin = this.zoomin.bind(this)
        this.zoomout = this.zoomout.bind(this)

        this.state = {
            width: 200,
            height: 200,
            fontSize: 25,
            list: [],
        }

        axios.get(`${URL}?sort-=createAt`)
            .then(resp => this.setState({...this.state, list: resp.data}))
    }

    zoomin(){
        this.setState({width: 200, height: 200, fontSize: 25})
    }

    zoomout(){
        let size = this.state.width
        let fontSize = this.state.fontSize

        size -=20
        fontSize -= 3
        
        if(size > 100){
            this.setState({width: size, height: size, fontSize: fontSize})
        }else if(size <= 100 && size > 60){
            this.setState({width: size, height: size, fontSize: 0})
        }else if(size <= 60){
            return false
        }
    }

    render(){
        return (
            <div className='container'>
                <Menu zoomin={this.zoomin} zoomout={this.zoomout}/>
                <Painel width={this.state.width} height={this.state.height} fontSize={this.state.fontSize} list={this.state.list}/>
            </div>
        )
    }
}