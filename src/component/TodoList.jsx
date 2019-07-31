import React from 'react'
import Todo from './Todo'
import {connect} from 'react-redux'
import {getTodosByVisibilityFilter} from '../redux/selectors'
import {toggleTodo} from '../redux/action' //


// export default class TodoList extends React.Component {
//   getFilteredTodos() {
//     const filter = this.props.filter
//     const todos = this.props.todos
//     return todos.filter(todo => filter(todo))
//   }

//   checkHandler(e,todo){
//     const checked=e.target.checked
//     const completeStatus=checked ? 'completed' : 'incomplete'
//     this.props.changeTodoStatus(todo,completeStatus)
//   }

//   render() {
//     const todos=this.getFilteredTodos().map(todo => 
//       <Todo key={todo.content} 
//         content={todo.content} 
//         checkHandler={(e)=>this.checkHandler(e,todo)}
//         checked={todo.completeStatus==='completed'}
//       />
//     )

//     return (
//       <div>
//         {todos}
//       </div>
//     )
//   }
// }

//以下写法是引入了redux---------------------------

const TodoList=({todos,toggleTodo})=>(
  <ul className='todo-list'>
    {todos && todos.length
      ? todos.map((todo,index)=>{
        return <Todo key={`todo-${todo.id}`} todo={todo} toggleTodo={toggleTodo} />
      })
      :'No todos'
    }
  </ul>
)

export default connect(
  state=>({todos:getTodosByVisibilityFilter(state)}),
  {toggleTodo}
)(TodoList)