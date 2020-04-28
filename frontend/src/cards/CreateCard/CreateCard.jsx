import React, {Component} from 'react'
import { Button, InputGroup, FormControl  } from 'react-bootstrap';
import axios from 'axios'
import './CreateCard.css'

const URL = 'http://localhost:3333/api/cards/'

export default class CreateCard extends Component {

    constructor(props){
        super(props)
  
        this.state = {
            title: '',
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick(){
         const title = this.state.title
         axios.post(URL, {title})
           .then(res => alert(`${this.state.title} Criado`))
    }

    handleChange(e){
      this.setState({...this.state, title: e.target.value})
    }

    render(){
        return (

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div>
                <InputGroup size="sm" className="mb-3" >
                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Nome do Card" onChange={this.handleChange}/>
                </InputGroup>
                </div>
            
            <div>
                <Button className='submit' variant="success" onClick={() => this.handleClick()}>Success</Button>{' '}
            </div>
            </div>
        )

}
}