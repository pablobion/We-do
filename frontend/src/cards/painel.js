import React, {Component} from 'react'
import './cards.css'
import GenerateCard from './generateCard'

import {Link} from "react-router-dom";

export default class Painel extends Component {
    
    constructor (props) {
        super(props)
        this.card = this.card.bind(this)
    }

    card(title, width, height, fontSize){
        const list = this.props.list || []// se vier na constante coloca no props se nao na []
        console.log(list)
        return list.map(card =>(
            <div key={card._id}>  
                <Link to={{
                    pathname: '/cardpage',
                    state: { id: card._id, name: card.title }
                }}>
                        <GenerateCard  title={card.title} width={width} height={height} fontSize={fontSize} onClick={() => console.log(`ID do card acessado: ${card._id}`)}  /> 
                </Link>
            </div>
        ))
    }
    
    render() {
        return (
            <div>
                <h1>Cards</h1>
                <div className='cards-list'>
                    {this.card(this.title, this.props.width, this.props.height, this.props.fontSize)}
                </div>         
            </div>
        )
    }

}