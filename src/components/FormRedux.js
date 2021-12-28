import React, { useState } from 'react'

import { addTodo,
        todoDeleteAllComplete,
        todoFilterByCompletedTrueFalse,
        todoFilterByCompletedDefault} from '../actions'
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
    const optionClickHandler=(e)=>{
          props.dispatch(todoFilterByCompletedDefault(e.target.value))
    }
    return(
        <div>
            <form>
                <input onChange={todoInput} value={todos} type='text'></input>
                <button onClick={submitTodoHandler}>add todo</button>
                <button onClick={deleteAllCompleteTodo}>Remove Completed Todo</button>
                <select onChange={optionClickHandler}>
                    <option value='all' >Show All</option>
                    <option value='true' >Show Complete</option>
                    <option value='false' >Show Incomplete</option>
                </select>
            </form>
        </div>
    )
}
const mapStateToProps = (state)=>{
    console.log(state)
    return {
      reduxtodos:state.todoReducer.todos,
      filter:state.todoReducer.completeView
    }
  }
export default connect(mapStateToProps)(FormRedux)