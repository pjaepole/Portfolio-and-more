import React, { useState } from 'react'
import { Button,InputGroup,FormControl,Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addTodo,
        todoDeleteAllComplete,
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
            <form onSubmit={submitTodoHandler}>
                    <Button className='todoTitle'  variant="dark" size="lg">
                    Todo List
                    </Button>
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="What to do....."
                    aria-describedby="basic-addon2"
                    onChange={todoInput} value={todos} type='text'
                    />
                    <Button variant="secondary" onClick={submitTodoHandler}>Add Todo</Button>
                    <Button variant="outline-secondary" onClick={deleteAllCompleteTodo}>Remove Completed Todo</Button>
                </InputGroup>
                <Form.Select aria-label="Default select example" onChange={optionClickHandler}>
                        
                        <option value='All' >Show All</option>
                        <option value='true' >Show Complete</option>
                        <option value='false' >Show Incomplete</option>
                </Form.Select>
            </form>
        </div>
    )
}
const mapStateToProps = (state)=>{
    
    return {
      reduxtodos:state.todoReducer.todos,
      filter:state.todoReducer.completeView
    }
  }
export default connect(mapStateToProps)(FormRedux)