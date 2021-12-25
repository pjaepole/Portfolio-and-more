import React, { useState } from 'react'

import { addTodo } from '../actions'
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
    return(
        <div>
            <form>
                <input onChange={todoInput} value={todos} type='text'></input>
                <button onClick={submitTodoHandler}>adding mock todo</button>
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