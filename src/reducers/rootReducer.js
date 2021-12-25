import {
    ADD_TODO
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
        default:
            return state
    }
    
}

export default rootReducer