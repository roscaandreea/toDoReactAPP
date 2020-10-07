import React, { useState,useEffect } from 'react';
import Form from './components/Form';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  //state stuff
  const [inputText,setInputText] = useState("");
  const [todos,setToDos] = useState([]);
  const [status,setStatus] = useState('all');
  const [filtered,setFiltered] = useState([]);
  
  //run only once when app start
  useEffect(() => {
    getLocalTodos();
  },[]);

  //use effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  },[todos,status]);

  //methods
  const filterHandler = () => {
    switch(status){
      case 'done':
        setFiltered(todos.filter(todo => todo.completed === true));
        break;
      case 'work_in_progress':
        setFiltered(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFiltered(todos);
        break;

    }
  };
  //save local
  const saveLocalTodos = () => {
      localStorage.setItem('todos',JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos",JSON.stringify([]));
    }else{
      let todoData = JSON.parse(localStorage.getItem("todos"));
      setToDos(todoData);
    }
  };

  return (
    <div className="App">
      <header>
      <h1>Andreea's Todo List</h1>
    </header>
    <Form 
      todos={todos} 
      setToDos={setToDos} 
      inputText={inputText} 
      setInputText={setInputText}
      status={status}
      setStatus={setStatus}
     />
     <ToDoList 
      todos={todos} 
      setToDos={setToDos}
      filtered={filtered}
      setFiltered={setFiltered} />
    </div>
  );
}

export default App;
