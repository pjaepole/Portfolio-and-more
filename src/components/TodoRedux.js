import {useState, useEffect} from 'react'
import {todoCompletedToggle,
        todoDelete,
        todoEdit} from '../actions'
import {connect } from 'react-redux'
import { InputGroup,
        FormControl,
        Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function TodoRedux(props){
    const [check,setCheck]=useState(false)
    const {todo, dtheme,reduxtodos}=props
    // useEffect(()=>{
    //     const setlocal=()=>{
    //         localStorage.setItem('todos',JSON.stringify(reduxtodos))
    //     }
    //     setlocal()
    // },[todo])
    console.log(reduxtodos)
    let completeToggler=(e)=>{
        props.dispatch(todoCompletedToggle(todo.id))
        setCheck(!check)
    }
    const deleteHandler=(e)=>{
        props.dispatch(todoDelete(todo.id))
    }

    const editHandler=(e)=>{
        console.log('edithandler', e.target.value)
        console.log(todo)
        props.dispatch(todoEdit(todo.id,e.target.value))
    }
    return (
        <div>
            
        {todo.completed?
            <InputGroup className={dtheme?'mb-3 todo dark':'mb-3 todo'}>
                <InputGroup.Checkbox className={dtheme?'dark':''}aria-label="Checkbox for following text input" onChange={completeToggler} checked={check}/>
                <FormControl className={dtheme?'todoC dark':'todoC'} onClick={completeToggler} defaultValue={todo.text} onChange={editHandler}  aria-label="Text input with checkbox" />
                <Button variant="dark" onClick={completeToggler}>Done</Button>
                <Button variant="outline-secondary" onClick={deleteHandler}>Delete</Button>
            </InputGroup>
            :
            <InputGroup className={dtheme?'mb-3 todo dark':'mb-3 todo'}>
                <InputGroup.Checkbox className={dtheme?'dark':''}aria-label="Checkbox for following text input" onChange={completeToggler} checked={check}/>
                <FormControl className={dtheme?'dark':''} onClick={completeToggler} defaultValue={todo.text} onChange={editHandler}  aria-label="Text input with checkbox" />
                <Button variant="dark" onClick={completeToggler}>Done</Button>
                <Button variant="outline-secondary" onClick={deleteHandler}>Delete</Button>
            </InputGroup>
        }
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
        reduxtodos:state.todoReducer.todos,
        dtheme:state.todoReducer.darkmode
    }
  }
export default connect(mapStateToProps)(TodoRedux)