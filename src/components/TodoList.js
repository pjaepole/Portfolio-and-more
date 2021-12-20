import React from 'react'
import Todo from './Todo'

function TodoList (props) {
    const {todos, setTodos}=props

    return(
        <div>
            {todos.map(todo=>{return <Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.id}/>})}
        </div>
    )
}
export default TodoList