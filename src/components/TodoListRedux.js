import React from 'react'
import {connect} from 'react-redux'
import TodoRedux from './TodoRedux'

function TodoListRedux (props) {
    
    return(
        <div>
            {props.reduxtodos.length<1?
                <h4>Add Something To Do</h4>:
                props.reduxtodos.map(todo=>(<TodoRedux key={todo.id} todo={todo}/>))
            }
           

        </div>
    )
}


const mapStateToProps = (state)=>{
    return {
      reduxtodos:state.todoReducer.todos
    }
  }
export default connect(mapStateToProps)(TodoListRedux)