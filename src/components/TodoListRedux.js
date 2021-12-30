import React from 'react'
import {connect} from 'react-redux'
import TodoRedux from './TodoRedux'

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
    
    return(
        
        <div>
            {reduxtodos.length<1?
                <h4>Add Something To Do</h4>:
                reduxtodos.map(todo=>(<TodoRedux key={todo.id} todo={todo}/>))
            }
           
            <h1>{displayCompletion} Todos </h1>
            {fil.length<1?
                <div>There are nothing {displayCompletion}{reduxtodos.length===0?'add something to do':''}{fil.map(todo=>{return <TodoRedux todo={todo} key={todo.id}/>})}</div>
                :
                <div>{fil.map(todo=>{return <TodoRedux todo={todo} key={todo.id}/>})}{fil.length===0?"nothing filtered yet, use dropdown select option to change filter":""}</div>
            }
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