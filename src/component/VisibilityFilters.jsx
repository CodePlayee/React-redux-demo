import React from 'react'
import cx from 'classnames'
import {VISIBILITY_FILTERS} from '../constants'
import {connect} from 'react-redux'
import {setFilter} from '../redux/action'
import {getActiveFilter} from '../redux/selectors'

// export default class VisibilityFilters extends React.Component{
   
//     render(){
//         return (
//             <div onClick={(e)=>this.props.filterClickHandler(e)}>
//                 <button value='all'>all</button>
//                 <button value='completed'>completed</button>
//                 <button value='incomplete'>incomplete</button>
//             </div>
//         )
//     }
// }

const VisibilityFilters=({activeFilter,setFilter})=>{
    return (
        <div className='visibility-filters'>
            {
                Object.keys(VISIBILITY_FILTERS).map(filterKey=>{
                    const currentFilter=VISIBILITY_FILTERS[filterKey]
                    return (
                        <span
                            key={`visibility-filter-${currentFilter}`}
                            className={cx(
                                'filter',
                                currentFilter===activeFilter && 'filter--active'
                            )}
                            onClick={()=>{setFilter(currentFilter)} /**waiting for setFilter handler**/ } 
                        >
                           {currentFilter}
                        </span>
                    )     
                })
            }
        </div>
    )
}

export default connect(
    (state)=>({activeFilter:getActiveFilter(state)}),
    {setFilter}
)(VisibilityFilters)