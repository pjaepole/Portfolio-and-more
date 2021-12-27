import React, { useState } from 'react'

import { addTodo,todoDeleteAllComplete } from '../actions'
import {connect } from 'react-redux'
function FormRedux(props){
    const [todos,setTodos]=useState("")
    const todoInput=(e)=>{
        setTodos(e.target.value)
    }
    
    
    const submitTodoHandler=(e)=>{
        e.preventDefault()
        props.dispatch(addTodo({text: todos, completed:false, id:Date.now()}))
       setTodos('')
    }
    const deleteAllCompleteTodo=(e)=>{
        e.preventDefault()
        props.dispatch(todoDeleteAllComplete())
    }
    return(
        <div>
            <form>
                <input onChange={todoInput} value={todos} type='text'></input>
                <button onClick={submitTodoHandler}>add todo</button>
                <button onClick={deleteAllCompleteTodo}>Remove Completed Todo</button>
            </form>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
      reduxtodos:state.todos
    }
  }
export default connect(mapStateToProps)(FormRedux)