import React from 'react'
import {connect} from 'react-redux'
import TodoRedux from './TodoRedux'

function TodoListRedux (props) {
    const {reduxtodos, filter}=props
    console.log(filter)
    let fil=reduxtodos.filter((todo)=>(todo.completed.toString()===filter))
    return(
        <div>
            {reduxtodos.length<1?
                <h4>Add Something To Do</h4>:
                reduxtodos.map(todo=>(<TodoRedux key={todo.id} todo={todo}/>))
            }
           
            <h1>checking filter is working</h1>
            {filter==="all"?
                <ol>{reduxtodos.length===0?'add something to do':''}{reduxtodos.map(todo=>{return <li key={todo.id}><TodoRedux todo={todo} key={todo.id}/></li>})}</ol>
                :
                <ol>{fil.map(todo=>{return <li key={todo.id}><TodoRedux todo={todo} key={todo.id}/></li>})}{fil.length===0?"nothing yet":""}</ol>
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