import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  getFilteredTodos() {
    const filter = this.props.filter
    const todos = this.props.todos
    return todos.filter(todo => filter(todo))
  }

  checkHandler(e,todo){
    const checked=e.target.checked
    const completeStatus=checked ? 'completed' : 'incomplete'
    this.props.changeTodoStatus(todo,completeStatus)
  }

  render() {
    const todos=this.getFilteredTodos().map(todo => 
      <Todo key={todo.content} 
        content={todo.content} 
        checkHandler={(e)=>this.checkHandler(e,todo)}
        checked={todo.completeStatus==='completed'}
      />
    )

    return (
      <div>
        {todos}
      </div>
    )
  }
}