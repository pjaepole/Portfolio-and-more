export const ADD_TODO="ADD_TODO";
export const TODO_COMPLETED_TOGGLE="TODO_COMPLETED_TOGGLE"


export const addTodo=(todo)=>{
    return({type:ADD_TODO, payload:todo})
}

export const todoCompletedToggle=(id)=>{
    return({type:TODO_COMPLETED_TOGGLE, payload:id})
}