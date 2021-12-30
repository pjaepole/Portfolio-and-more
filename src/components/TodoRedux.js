import {todoCompletedToggle,todoDelete} from '../actions'
import {connect } from 'react-redux'
import { InputGroup,
        FormControl,
        Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function TodoRedux(props){
    
    const {todo}=props
    let completeToggler=(e)=>{
        props.dispatch(todoCompletedToggle(todo.id))
    }
    const deleteHandler=(e)=>{
        props.dispatch(todoDelete(todo.id))
    }
    return (
        <div>
            
        {todo.completed?
            <InputGroup className="mb-3 todo">
                <InputGroup.Checkbox aria-label="Checkbox for following text input" defaultChecked/>
                <FormControl className='todoC' onClick={completeToggler} defaultValue={todo.text} aria-label="Text input with checkbox" />
                <Button onClick={completeToggler}>Done</Button>
                <Button variant="danger" onClick={deleteHandler}>Delete</Button>
            </InputGroup>
            :
            <InputGroup className="mb-3">
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
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