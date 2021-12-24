import React, { useState } from 'react'
import './App.css';
//import components
import Form from './components/Form'
import TodoList from './components/TodoList';
function App() {
  const [inputText, setInputText]=useState("");
  const [todos, setTodos]=useState([]);
  const [filter, setFilter]=useState('all')
  return (
    <div className="App">
      <header>
        <h1>ToDo List</h1>
      </header>
      <Form todos={todos} setFilter={setFilter} filter={filter} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
      <TodoList todos={todos} setTodos={setTodos} filter={filter} setFilter={setFilter}/>
    </div>
  );
}

export default App;
