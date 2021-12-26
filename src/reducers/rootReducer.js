import {
    ADD_TODO,
    TODO_COMPLETED_TOGGLE
} from '../actions'
export const initialState ={
    todos:[
        {text: 'this is mock redux todos ', completed:false, id:123},
        {text: 'todos mock ', completed:false, id:456},
        {text: 'todossnapple ', completed:false, id:789}
    ]
}

const rootReducer =(state=initialState,action)=>{
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
        default:
            return state
    }
    
}

export default rootReducer


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