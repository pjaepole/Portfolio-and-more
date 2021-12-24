import React from 'react'
import Todo from './Todo'

function TodoList (props) {
    const {todos, setTodos}=props
    return(
        <div>
            <ol>
            {todos.map(todo=>{return <li key={todo.id}><Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.id}/></li>})}
            </ol>
        </div>
    )
}
export default TodoList