import {todoCompletedToggle,todoDelete} from '../actions'
import {connect } from 'react-redux'
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
            <h3 onClick={completeToggler}>{todo.text} {todo.completed===true?'<-complete':'<-incomplete'}</h3>
            <button onClick={deleteHandler} >delete</button>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
      reduxtodos:state.todos
    }
  }
export default connect(mapStateToProps)(TodoRedux)