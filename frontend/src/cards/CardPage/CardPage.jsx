import React, {Component} from 'react'
import Settings from './Components/Settings/Settings'
import Wedo from '../../wedo/wedo.js'
import './CardPage.css'
import axios from 'axios'
import { Redirect } from "react-router-dom";

const URL = 'http://localhost:3333/api/'

export default class CardPage extends Component {
        constructor(props){
            super(props)
            this.state = {
                wedoslist: [],
                idcard: this.props.id,
                redirect: null,
            }
            this.handleDelete = this.handleDelete.bind(this)
        }

        handleDelete(){  
         
            axios.get(`${URL}wedos?idcard=${this.state.idcard}`)
            .then(resp => 
                resp.data.forEach((element)=>{
                     axios.delete(`${URL}wedos/${element._id}`)
                }) 
            )

            axios.delete(`${URL}cards/${this.state.idcard}`)
            .then(console.log('card apagado'))

            this.setState({redirect: 'cards'})
            
        }


        render(){
            if (this.state.redirect) {
                return <Redirect to={this.state.redirect} />
            }
            return (
                <div className='containerpage' >
                    <div className='infos'>    
                        <div className='title'>
                            <h1>{this.props.name}</h1>
                        </div>
                        <div className='model'>
                            { <Settings className='delete' delete={this.handleDelete}/> }
                        </div>  
                    </div>

                    <div style={{width: '100%'}}>
                        <div className='wedo'>
                        <Wedo idcard={this.props.id} />
                        </div>
                    </div>
                </div>
            )
        }
}