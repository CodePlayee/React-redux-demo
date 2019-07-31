import React from 'react';
import AddTodo from './component/AddTodo'
import TodoList from './component/TodoList'
import VisibilityFilter from './component/VisibilityFilters'
import './App.css';

//class App extends React.Component{
  // constructor(props){
  //   super(props)
  //   this.state={
  //     todos:[],
  //     filter:()=>{return true}
  //   }

  //   this.addTodoBtnClickHandler=this.addTodoBtnClickHandler.bind(this)
  //   this.filterClickHandler=this.filterClickHandler.bind(this)
  //   this.changeTodoStatus=this.changeTodoStatus.bind(this)
  // }

  // addTodoBtnClickHandler(value){
  //   const todos=this.state.todos.slice()
  //   todos.push({content:value,completeStatus:'incomplete'})
  //   this.setState({
  //     todos
  //   })
  // }

  // changeTodoStatus(todo,completeStatus){
  //   const todos=this.state.todos.slice()
  //   for(let i=0,len=todos.length;i<len;i++){
  //     if(todos[i].content===todo.content){
  //       todos[i].completeStatus=completeStatus
  //       break
  //     }
  //   }
  //   this.setState({
  //     todos
  //   })
  // }

  // filterClickHandler(e){
  //   const filterName=e.target.value
  //   let filter=()=>{return true}
  //   if(filterName==='completed'){
  //     filter=(todo)=>{
  //       return todo.completeStatus==='completed'
  //     }
  //   }
  //   else if(filterName==='incomplete'){
  //     filter=(todo)=>{
  //       return todo.completeStatus==='incomplete'
  //     }
  //   }
  //   this.setState({filter})
  // }

//   render(){
//     return (
//       <div>
//         <header>Todo List</header>
//         <AddTodo addTodoBtnClickHandler={this.addTodoBtnClickHandler}/>
//         <TodoList 
//           todos={this.state.todos} 
//           filter={this.state.filter}
//           changeTodoStatus={this.changeTodoStatus}
//         >
//         </TodoList>
//         <VisibilityFilter 
//           filterClickHandler={this.filterClickHandler}
//         />
//       </div>
//     )
//   } 
// }

// export default App;

export default function TodoApp(){
  return (
      <div className='todo-app'>
        <h1>Todo List with Redux</h1>
        <AddTodo />
        <TodoList />
        <VisibilityFilter />
      </div>
  )
}


