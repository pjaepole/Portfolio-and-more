import {useState} from 'react'
import {todoCompletedToggle,todoDelete} from '../actions'
import {connect } from 'react-redux'
import { InputGroup,
        FormControl,
        Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function TodoRedux(props){
    const [check,setCheck]=useState(false)
    const {todo}=props
    console.log(todo)
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
            <InputGroup className="mb-3 todo">
                <InputGroup.Checkbox aria-label="Checkbox for following text input" onChange={completeToggler} checked={check}/>
                <FormControl className='todoC' onClick={completeToggler} defaultValue={todo.text} aria-label="Text input with checkbox" />
                <Button onClick={completeToggler}>Done</Button>
                <Button variant="danger" onClick={deleteHandler}>Delete</Button>
            </InputGroup>
            :
            <InputGroup className="mb-3">
                <InputGroup.Checkbox aria-label="Checkbox for following text input" onChange={completeToggler} checked={check}/>
                <FormControl onClick={completeToggler} defaultValue={todo.text}  aria-label="Text input with checkbox" />
                <Button onClick={completeToggler}>Done</Button>
                <Button variant="danger" onClick={deleteHandler}>Delete</Button>
            </InputGroup>
        }
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
      reduxtodos:state.todos
    }
  }
export default connect(mapStateToProps)(TodoRedux)