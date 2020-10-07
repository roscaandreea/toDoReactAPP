import React from 'react';
import ToDo from './ToDo';


const ToDoList = ({todos,setToDos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
               {todos.map(todo => (
                   <ToDo 
                        key ={todo.task_id}
                        text={todo.text}
                        todos={todos}
                        todo={todo} 
                        setToDos={setToDos} />
               ))} 
            </ul>
        </div>
    );
};

export default ToDoList;
