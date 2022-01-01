import React from 'react'
import './components/Todo.css';
import Clock from './components/Clock';
import FormRedux from './components/FormRedux';
import TodoListRedux from './components/TodoListRedux';
import { connect } from 'react-redux'
import Footer from './components/Footer'



function App(props) {
   const {dtheme}=props
 
  return (
    <div className={dtheme?'dark':''}>
      <Clock/>
      <FormRedux/>
      <TodoListRedux />
      <Footer/>
    </div>
  );
}

const mapStateToProps = (state)=>{
  return {
    dtheme:state.todoReducer.darkmode
  }
}

export default connect(mapStateToProps)(App);
