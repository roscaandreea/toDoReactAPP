import React, { useState } from 'react';
import Form from './components/Form';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  const [inputText,setInputText] = useState("");
  const [todos,setToDos] = useState([]);
  return (
    <div className="App">
      <header>
      <h1>Andreea's Todo List</h1>
    </header>
    <Form 
      todos={todos} 
      setToDos={setToDos} 
      inputText={inputText} 
      setInputText={setInputText}/>
    <ToDoList todos={todos} />
    </div>
  );
}

export default App;
