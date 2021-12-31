import React from 'react'
import Todo from './Todo'

function TodoList (props) {
    const {todos, setTodos,filter}=props
    let fil=todos.filter((todo)=>(todo.completed.toString()===filter))
    return(
        <div className='todolist'>
            {filter==="all"?
                <ol>{todos.length===0?'add something to do':''}{todos.map(todo=>{return <li key={todo.id}><Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.id}/></li>})}</ol>
                :
                <ol>{fil.map(todo=>{return <li key={todo.id}><Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.id}/></li>})}{fil.length===0?"nothing yet":""}</ol>
            }
            
        
        </div>
    )
}
export default TodoList