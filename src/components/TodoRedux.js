import {useState} from 'react'
import {todoCompletedToggle,todoDelete} from '../actions'
import {connect } from 'react-redux'
import { InputGroup,
        FormControl,
        Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function TodoRedux(props){
    const [check,setCheck]=useState(false)
    const {todo, dtheme}=props
    let completeToggler=(e)=>{
        props.dispatch(todoCompletedToggle(todo.id))
        setCheck(!check)
    }
    const deleteHandler=(e)=>{
        props.dispatch(todoDelete(todo.id))
    }
    return (
        <div>
            
        {todo.completed?
            <InputGroup className={dtheme?'mb-3 todo dark':'mb-3 todo'}>
                <InputGroup.Checkbox className={dtheme?'dark':''}aria-label="Checkbox for following text input" onChange={completeToggler} checked={check}/>
                <FormControl className={dtheme?'todoC dark':'todoC'} onClick={completeToggler} defaultValue={todo.text} aria-label="Text input with checkbox" />
                <Button variant="dark" onClick={completeToggler}>Done</Button>
                <Button variant="outline-secondary" onClick={deleteHandler}>Delete</Button>
            </InputGroup>
            :
            <InputGroup className={dtheme?'mb-3 todo dark':'mb-3 todo'}>
                <InputGroup.Checkbox className={dtheme?'dark':''}aria-label="Checkbox for following text input" onChange={completeToggler} checked={check}/>
                <FormControl className={dtheme?'dark':''} onClick={completeToggler} defaultValue={todo.text}  aria-label="Text input with checkbox" />
                <Button variant="dark" onClick={completeToggler}>Done</Button>
                <Button variant="outline-secondary" onClick={deleteHandler}>Delete</Button>
            </InputGroup>
        }
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
      dtheme:state.todoReducer.darkmode
    }
  }
export default connect(mapStateToProps)(TodoRedux)