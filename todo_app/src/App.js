import React from 'react';
import Form from './components/Form';
import ToDoList from './components/ToDoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      <h1>Andreea's Todo List</h1>
    </header>
    <Form />
    <ToDoList />
    </div>
  );
}

export default App;
