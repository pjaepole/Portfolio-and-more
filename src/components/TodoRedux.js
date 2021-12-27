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
            {todo.completed?
                <div className='todo'>
                    <h3 className='todoC' onClick={completeToggler}>{todo.text}</h3>
                    <h4>{todo.completed?'<-(complete)':'<-(incomplete)'}</h4>
                    <button onClick={completeToggler}>Done</button>
                    <button onClick={deleteHandler} >delete</button>
                </div>:
                <div className='todo'>
                    <h3 onClick={completeToggler}>{todo.text}</h3>
                    <h4>{todo.completed?'<-(complete)':'<-(incomplete)'}</h4>
                    <button onClick={completeToggler}>Done</button>
                    <button onClick={deleteHandler} >delete</button>
                </div>
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