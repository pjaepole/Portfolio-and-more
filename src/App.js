import React from 'react'
import './components/Todo.css';
import Clock from './components/Clock';
import FormRedux from './components/FormRedux';
import TodoListRedux from './components/TodoListRedux';
import { connect } from 'react-redux'



function App(props) {
 
  
   
  return (
    <div className="App">
      <Clock/>
      <FormRedux/>
      <TodoListRedux />
    </div>
  );
}

const mapStateToProps = (state)=>{
  return {
    reduxtodos:state.todos
  }
}

export default connect(mapStateToProps)(App);
