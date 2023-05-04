import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './Form.css'


class Form extends Component {
    constructor(props){
       super(props)
       this.state = {
        task: '',
       }
       this.onSubmit = this.onSubmit.bind(this)
       this.handleChange = this.handleChange.bind(this)
    }
    onSubmit(e){
        e.preventDefault()
        this.props.createTodo({...this.state, id:uuidv4(), completed: false})
        this.setState({ task: '' })
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    render(){
        return(
         <form className='Form' onSubmit={this.onSubmit}>
            <label htmlFor='task'>Neler Yapacağım?</label> <br />
            <input 
            id='task' 
            name='task' 
            type='text' 
            placeholder='Planım Ne?!' 
            value={this.state.task}
            onChange={this.handleChange}
            ></input>
            <button>
            <i className="fa-regular fa-calendar-plus fa-bounce"></i>
            </button>
         </form>
        )
    }
}

export default Form