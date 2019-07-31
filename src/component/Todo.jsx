import React from 'react'
import cx from 'classnames'
//import {connect} from 'react-redux'
//import {toggleTodo} from '../redux/action'

// 1.无redux时的写法
// export default class Todo extends React.Component{
//     render(){
//         return (
//             <div>
//                 <input type='checkbox' checked={this.props.checked} onChange={(e)=>this.props.checkHandler(e)} />
//                 <span>{this.props.content}</span>
//             </div>
//         )
//     }
// }

//2、通过在父组件的 mapDispatchToProps 传入 toggleTodo(a function dispatches the actions)
// 该子组件甚至都感知不到redux的存在（也无需知道）
const Todo=({todo,toggleTodo})=>(       
    <li
        className='todo-item'
        onClick={()=>{toggleTodo(todo.id)}} //dispatches action to toggle todo
    >
        {todo && todo.completed ?  "👌" : "👋"}{" "}
        <span
            className={
                cx('todo-item__text',
                todo && todo.completed && "todo-item__text--completed")
            }
        >
            {todo.content}
        </span>
    </li>
)

// export default connect(
//     null,
//    // {toggleTodo}
// )(Todo)

export default Todo