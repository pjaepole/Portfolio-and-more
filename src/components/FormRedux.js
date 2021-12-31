import React, { useState,useEffect } from 'react'
import { Button,InputGroup,FormControl,Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addTodo,
        todoDeleteAllComplete,
        todoFilterByCompletedDefault,
        todoPersistant} from '../actions'
import {connect } from 'react-redux'
function FormRedux(props){
    const setlocal=()=>{
        localStorage.setItem('todos',JSON.stringify(props.reduxtodos))
    }
    const getlocal=()=>{
      console.log('thisis getlocal',(localStorage.getItem('todos')) )
      if(localStorage.getItem('todos')===null){
          return 
      }
      props.dispatch(todoPersistant(JSON.parse(localStorage.getItem('todos'))))
    }
    useEffect(()=>{
        getlocal()
    },[])
    useEffect(()=>{
        setlocal()
    },[props.reduxtodos])
    
    const initialFormvalue={
        todo:''
    }
    const [formvalues,setFormvalues]=useState(initialFormvalue)
    const todoInput=(e)=>{
        setFormvalues({
            ...formvalues,
            [e.target.name]:e.target.value
        })
    }
    
    const submitTodoHandler=(e)=>{
        e.preventDefault()
        props.dispatch(addTodo({text: formvalues.todo, completed:false, id:Date.now()}))
        setFormvalues({
           todo:''
       })
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
                    <div className='filterSelect'>
                        <Form.Select  aria-label="Default select example" onChange={optionClickHandler}> 
                                <option value='All' >Show All</option>
                                <option value='true' >Show Complete</option>
                                <option value='false' >Show Incomplete</option>
                        </Form.Select>
                    </div>
                    <FormControl
                        placeholder="Add What To Do....."
                        aria-describedby="basic-addon2"
                        onChange={todoInput} value={formvalues.todo} name='todo' type='text'
                    />
                    <Button variant="dark" onClick={submitTodoHandler}>Add Todo</Button>
                    <Button variant="outline-secondary" onClick={deleteAllCompleteTodo}>Remove Completed Todo</Button>
                    
                </InputGroup>
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