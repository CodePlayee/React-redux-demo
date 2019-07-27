import React from 'react'

export default class VisibilityFilters extends React.Component{
   
    render(){
        return (
            <div onClick={(e)=>this.props.filterClickHandler(e)}>
                <button value='all'>all</button>
                <button value='completed'>completed</button>
                <button value='incomplete'>incomplete</button>
            </div>
        )
    }
}