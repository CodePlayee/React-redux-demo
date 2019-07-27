import React from 'react'

export default class Todo extends React.Component{
    render(){
        return (
            <div>
                <input type='checkbox' checked={this.props.checked} onChange={(e)=>this.props.checkHandler(e)} />
                <span>{this.props.content}</span>
            </div>
        )
    }
}