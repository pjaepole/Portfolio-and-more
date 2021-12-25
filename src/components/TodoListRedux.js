import React, {useEffect} from 'react'
import {connect } from 'react-redux'

function TodoListRedux (props) {
   
    
    return(
        <div>
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