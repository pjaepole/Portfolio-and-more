import React from 'react'

function Form(props){
    const {setInputText, todos, setTodos,inputText}=props
    const inputTextHandler=(e)=>{
        setInputText(e.target.value)
    };
    const submitTodoHandler=(e)=>{
        e.preventDefault()
        setTodos([
            ...todos,
            {text: inputText, completed:false, id:Date.now()}
        ])
        setInputText('')
    }
    const removeAllCompleteHandler=(e)=>{
        e.preventDefault()
        console.log(todos)
        setTodos(todos.filter(todo=>(todo.completed===false)))
    }
    const dropdownonchangeHandler=(e)=>{
        
        let arr
        arr=todos.filter(todo=>(todo.completed.toString()===e.target.value))
        setTodos(arr)
        
    }
    return(
        <div>
            <form>
                <input onChange={inputTextHandler} value={inputText} type='text'></input>
                <select onChange={dropdownonchangeHandler} defaultValue={"all"}>
                    <option value="true">complete</option>
                    <option value='false'>incomplete</option>
                    <option value='all'>all</option>
                </select>
                <button onClick={submitTodoHandler}type='submit'>add</button>
                <button onClick={removeAllCompleteHandler}>remove all completed task</button>
            </form>
        </div>
    )
}

export default Form