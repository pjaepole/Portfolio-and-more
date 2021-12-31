export const ADD_TODO="ADD_TODO";
export const TODO_COMPLETED_TOGGLE="TODO_COMPLETED_TOGGLE"
export const TODO_DELETE="TODO_DELETE"
export const TODO_DELETE_ALL_COMPLETE="TODO_DELETE_ALL_COMPLETE"
export const TODO_FILTER_BY_COMPLETED_DEFAULT="TODO_FILTER_BY_COMPLETED_DEFAULT"
export const TODO_PERSISTANT="TODO_PERSISTANT"
export const DARKMODE_TOGGLE="DARKMODE_TOGGLE"

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

export const todoFilterByCompletedDefault=(filter)=>{
    return({type:TODO_FILTER_BY_COMPLETED_DEFAULT, payload:filter})
}

export const todoPersistant=(todos)=>{
    return({type:TODO_PERSISTANT, payload:todos})
}

export const darkmodeToggle=()=>{
    return({type:DARKMODE_TOGGLE})
}