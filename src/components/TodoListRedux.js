import React from 'react'
import {connect} from 'react-redux'
import TodoRedux from './TodoRedux'

function TodoListRedux (props) {
    const {reduxtodos, filter}=props
    let fil=reduxtodos.filter((todo)=>(todo.completed.toString()===filter))
    return(
        <div>
            {reduxtodos.length<1?
                <h4>Add Something To Do</h4>:
                reduxtodos.map(todo=>(<TodoRedux key={todo.id} todo={todo}/>))
            }
           
            <h1>Todos filtered</h1>
            {filter==="all"?
                <ul>{reduxtodos.length===0?'add something to do':''}{reduxtodos.map(todo=>{return <li key={todo.id}><TodoRedux todo={todo} key={todo.id}/></li>})}</ul>
                :
                <ul>{fil.map(todo=>{return <li key={todo.id}><TodoRedux todo={todo} key={todo.id}/></li>})}{fil.length===0?"nothing filtered yet, use dropdown select option to change filter":""}</ul>
            }
        </div>
    )
}


const mapStateToProps = (state)=>{
    return {
      reduxtodos:state.todoReducer.todos,
      filter:state.todoReducer.completeView
    }
  }
export default connect(mapStateToProps)(TodoListRedux)