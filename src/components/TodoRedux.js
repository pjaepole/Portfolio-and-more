import {todoCompletedToggle} from '../actions'
import {connect } from 'react-redux'
function TodoRedux(props){
    console.log(props)
    const {todo}=props
    let completeToggler=(e)=>{
        props.dispatch(todoCompletedToggle(todo.id))
    }
    return (
        <div>
            <h3 onClick={completeToggler}>{todo.text} {todo.completed===true?'true':'false'}</h3>
        
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
      reduxtodos:state.todos
    }
  }
export default connect(mapStateToProps)(TodoRedux)