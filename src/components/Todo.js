import './Todo.css'

function Todo(props){
    const {todo, todos, setTodos}=props
    const deleteHandler=()=>{
        setTodos(todos.filter(item=>item.id!==todo.id))
    }
    const toggleDone=()=>{
        setTodos(todos.map(item=>{
            if(item.id===todo.id){
               return {
                   ...item,
                   completed:!item.completed
               }
            }
            return item
        }))
    }
    return(
        <div>
            {todo.completed?<div className='todoC'>{todo.text}</div> :<div>{todo.text}</div>}
            <button onClick={toggleDone}>done</button>
            <button onClick={deleteHandler}>remove from list</button>
        </div>
    )
}

export default Todo