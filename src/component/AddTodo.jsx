import React from 'react'

export default class AddTodo extends React.Component{
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

    addBtnClickHandler(){
        if(!this.state.inputValue){
            alert('todo can not be null')
            return
        }
        this.props.addTodoBtnClickHandler(this.state.inputValue)
        this.setState({
            inputValue:''
        })
    }

    render(){
        return (
            <div>
                <input value={this.state.inputValue} 
                    onChange={this.changeHandler} 
                />
                <button onClick={this.addBtnClickHandler}>Add Todo</button>
            </div>
        )
    }
}