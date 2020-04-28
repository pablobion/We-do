import React, {Component} from 'react'
import WedoForm from './wedoForm'
import WedoList from './wedoList'
import axios from 'axios'

const URL = 'http://localhost:3333/api/wedos'


export default class Wedo extends Component {

    constructor(props){
        super(props)
        this.state = {
            description: '', 
            list: [],
            idcard: this.props.idcard
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.refresh()
        this.handleClear = this.handleClear.bind(this)
    }

    refresh(description = ''){
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?idcard=${this.state.idcard}&sort-=createAt${search}`)
            .then(resp => this.setState({...this.state, description, list: resp.data}))
            console.log(this.state.list)
    }

    handleSearch(){
        this.refresh(this.state.description)
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd(){
        const description = this.state.description
        const idcard = this.state.idcard
        axios.post(URL, {description, idcard})
            .then(res => this.refresh())
    }

    handleRemove(wedo){
        axios.delete(`${URL}/${wedo._id}`)
        .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsDone(wedo){
        axios.put(`${URL}/${wedo._id}`, { ...wedo, done: true})
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending(wedo){
        axios.put(`${URL}/${wedo._id}`, { ...wedo, done: false})
        .then(resp => this.refresh(this.state.description))
    }

    handleClear(){
       this.refresh()
    }

    render(){
        return (
            <div>
                <WedoForm 
                    description={this.state.description} 
                    idcard={this.state.idcard}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} 
                    handleSearch={this.handleSearch} 
                    handleClear={this.handleClear}/>
                <WedoList 
                    list={this.state.list}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleRemove={this.handleRemove}
                />
            </div>
        )
    }
}

