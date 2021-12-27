export const ADD_TODO="ADD_TODO";
export const TODO_COMPLETED_TOGGLE="TODO_COMPLETED_TOGGLE"
export const TODO_DELETE="TODO_DELETE"
export const TODO_DELETE_ALL_COMPLETE="TODO_DELETE_ALL_COMPLETE"


export const addTodo=(todo)=>{
    return({type:ADD_TODO, payload:todo})
}

export const todoCompletedToggle=(id)=>{
    return({type:TODO_COMPLETED_TOGGLE, payload:id})
}

export const todoDelete=(id)=>{
    return({type:TODO_DELETE, payload:id})
}

export const todoDeleteAllComplete=()=>{
    return({type:TODO_DELETE_ALL_COMPLETE})
}