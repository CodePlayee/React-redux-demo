import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../redux/action'

class AddTodo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            inputValue:''
        }

        this.changeHandler=this.changeHandler.bind(this)
        this.addBtnClickHandler=this.addBtnClickHandler.bind(this)
    }

    changeHandler(e){
        this.setState({
            inputValue:e.target.value
        })
    }

    addBtnClickHandler=()=>{
        // if(!this.state.inputValue){
        //     alert('todo can not be null')
        //     return
        // }
        // this.props.addTodoBtnClickHandler(this.state.inputValue)
        // this.setState({
        //     inputValue:''
        // })

        // 以下是引入了 redux 的写法----------------
        // dispatches actions to add todo
        // sets state back to empty string
        this.props.addTodo(this.state.inputValue)
        this.setState({inputValue:''})
    }

    render(){
        return (
            <div>
                <input 
                    value={this.state.inputValue} 
                    onChange={this.changeHandler} 
                />
                <button className='add-todo' onClick={this.addBtnClickHandler}>
                    Add Todo
                </button>
            </div>
        )
    }
}

// 以下写法的结果使得组件<AddTodo /> 被包裹在
// 父组件 <Connect(AddTodo) /> 中，且<AddTodo />获得了 addTodo (属于props)
export default connect(
    null,
    {addTodo}
)(AddTodo)