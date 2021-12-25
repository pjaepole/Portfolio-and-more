const initialState ={
    todos:[
        {text: 'todos will be listed here ', completed:false, id:123},
        {text: 'todos will be listed here ', completed:false, id:456},
        {text: 'todos will be listed here ', completed:false, id:789}
    ]
}

const rootReducer =(state=initialState,action)=>{
    return state
}

export default rootReducer