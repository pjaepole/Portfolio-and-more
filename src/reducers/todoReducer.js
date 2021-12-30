import {
    ADD_TODO,
    TODO_COMPLETED_TOGGLE,
    TODO_DELETE,
    TODO_DELETE_ALL_COMPLETE,
    TODO_FILTER_BY_COMPLETED_DEFAULT
} from '../actions'

export const initialState ={
    todos:[
        {text: 'this is mock redux todos ', completed:false, id:123},
        {text: 'make at least one commit a day', completed:false, id:456},
        {text: 'sigh', completed:false, id:789}
    ],
    completeView:'All'
}

const todoReducer =(state=initialState,action)=>{
    switch (action.type){
        case(ADD_TODO):
            return({
                ...state,
                todos:[...state.todos,action.payload]
            })
        case(TODO_COMPLETED_TOGGLE):
            return({
                ...state,
                todos:state.todos.map((todo)=>{if(todo.id===action.payload){
                    return {...todo,completed:!todo.completed}
                } else {
                    return {...todo}
                }})
            })
        case(TODO_DELETE):
            return({
                ...state,
                todos:state.todos.filter((todo)=>{return todo.id!==action.payload})            
            })
        case(TODO_DELETE_ALL_COMPLETE):
            return({
                ...state,
                todos:state.todos.filter((todo)=>{return todo.completed===false})
            })
        case(TODO_FILTER_BY_COMPLETED_DEFAULT):
            return({
                ...state,
                completeView:action.payload
            })
            
        default:
            return state
    }
    
}

export default todoReducer


// case(TODO_COMPLETED_TOGGLE):
//             return({
//                 ...state,
//                 todos:state.todos.map(function(todo){
//                     return action.payload===todo.id
//                     ?{
//                         ...todo,
//                         completed:!todo.completed
//                     }:todo
//                 })
//             })