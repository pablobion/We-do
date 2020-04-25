import React, {Component} from 'react'
import './cards.css'
import GenerateCard from './generateCard'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";


export default class Painel extends Component {
    

    constructor (props) {
        super(props)
        this.title = 'Meu primeiro card'
        this.card = this.card.bind(this)
   
    }




    card(title, width, height, fontSize){
        const list = this.props.list || []// se vier na constante coloca no props se nao na []

       
        return list.map(card =>(
            <div key={card._id}>
                
            <Link to={{
                pathname: '/pagecard',
                state: { id: card._id, name: this.title }
            }}>
                
           
        
                 
           
                    <GenerateCard  title={title} width={width} height={height} fontSize={fontSize} onClick={() => alert(card._id)}  />
                    
                    
     
                 
           
            </Link>
            </div>

                  
        ))
    }
    

render() {
   
return (
 
<div>
    <div className='cards-list'>
        {this.card(this.title, this.props.width, this.props.height, this.props.fontSize)}
    </div>         
</div>

)
}

}