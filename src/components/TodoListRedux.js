import React from 'react'
import {connect} from 'react-redux'
import TodoRedux from './TodoRedux'
import {todoDeleteAllComplete} from '../actions'
import { Button } from 'react-bootstrap';
function TodoListRedux (props) {
    const {reduxtodos, filt}=props
    let fil
    let displayCompletion
    if(filt==='All'){
        fil=reduxtodos
        displayCompletion=filt
    } else if (filt==='true'|| filt==='false'){
        fil=reduxtodos.filter((todo)=>(todo.completed.toString()===filt))
        if(filt==='true'){
            displayCompletion='Completed'
        } else if( filt ==='false'){
            displayCompletion='Incomplete'
        }
    }
    const deleteAllCompleteTodo=(e)=>{
        e.preventDefault()
        props.dispatch(todoDeleteAllComplete())
    }
    return(
        
        <div className='todosContainer'>
            <div className='todo'>
                <h1>{displayCompletion} Todos </h1>
            </div>
            {fil.length<1?
                <div className='todo'>
                    {reduxtodos.length===0?"I don't think you have anything in the list":`Under ${displayCompletion} Filter There Is Nothing.`}
                </div>
                :
                <div>{fil.map(todo=>{return <TodoRedux todo={todo} key={todo.id}/>})}
                    {fil.length===0?"nothing filtered yet, use dropdown select option to change filter":""}
                </div>
            }
            <div className='deleteAllcompletebutton'>
            <Button style={{width:'50%'}} variant="outline-secondary" onClick={deleteAllCompleteTodo}>Remove Completed Todo</Button>
            </div>
        </div>
    )
}


const mapStateToProps = (state)=>{
    return {
      reduxtodos:state.todoReducer.todos,
      filt:state.todoReducer.completeView
    }
  }
export default connect(mapStateToProps)(TodoListRedux)