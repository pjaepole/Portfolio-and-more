import React, { useState } from 'react'
import './App.css';
//import components
import Clock from './components/Clock'
import Form from './components/Form'
import FormRedux from './components/FormRedux';
import TodoList from './components/TodoList';
import TodoListRedux from './components/TodoListRedux'
import { connect } from 'react-redux'



function App(props) {
 
  const [inputText, setInputText]=useState("");
  const [todos, setTodos]=useState([]);
  const [filter, setFilter]=useState('all')
   let time= new Date()
 time=time.toLocaleTimeString()
  return (
    <div className="App">
    
      <Clock></Clock>
      <header>
        <h1>ToDo List</h1>
      </header>
        <h2>Non redux</h2>
      <Form todos={todos} setFilter={setFilter} filter={filter} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
      <TodoList todos={todos} setTodos={setTodos} filter={filter} setFilter={setFilter}/>


      <h2>Redux ver.</h2>
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
