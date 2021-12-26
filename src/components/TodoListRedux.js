import React from 'react'
import {connect} from 'react-redux'
import TodoRedux from './TodoRedux'

function TodoListRedux (props) {
    
    return(
        <div>
           {props.reduxtodos.map(todo=>(<TodoRedux key={todo.id} todo={todo}/>))}
           {props.reduxtodos.map(todo=>(<div key={todo.id}>{todo.text}</div>))}
        </div>
    )
}


const mapStateToProps = (state)=>{
    return {
      reduxtodos:state.todos
    }
  }
export default connect(mapStateToProps)(TodoListRedux)