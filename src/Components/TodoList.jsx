import React, {Component} from 'react'
import Todo from './Todo'
import Form from './Form'
import './TodoList.css'

 class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
        }
        this.create = this.create.bind(this)
        this.update = this.update.bind(this)
        this.toggleCompletion = this.toggleCompletion.bind(this)
    }

 create(yeniTodo){
    this.setState({
        todos: [...this.state.todos, yeniTodo],
    })
 }
 remove(id){
    this.setState({
        todos: this.state.todos.filter(todo => todo.id !==id)
    })
 }
 update(id, updateTask){
    const updatedTodos = this.state.todos.map(todo => {
        if(todo.id === id){
            return {...todo, task: updateTask}
        }
        return todo
    })
    this.setState({todos: updatedTodos})
 }
 toggleCompletion(id){
    const updatedTodos = this.state.todos.map((todo) => {
        if(todo.id === id){
            return { ...todo, completed: !todo.completed}
        }
        return todo
    })
    this.setState({
        todos: updatedTodos,
    })
 }
 render () {
    const todos = this.state.todos.map((todo) => {
        return (
            <Todo 
            key={todo.id}
            id={todo.id}
            completed={todo.completed} 
            updateTodo={this.update}
            task={todo.task} 
            removeTodo={() => this.remove(todo.id)}
            toggleTodo={this.toggleCompletion}
            />
        )
    })

  return (
    <div className='TodoList'>
      <h1>To Do List</h1>
      <ul>
        <Form createTodo={this.create}/>
        {todos}
      </ul>
    </div>
  )
 }
}

export default TodoList
