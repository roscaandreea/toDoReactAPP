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

  //use effect
  useEffect(() => {
    filterHandler();
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
