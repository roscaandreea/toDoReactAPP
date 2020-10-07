import React from 'react';

const ToDo = ({text,todos,setToDos,todo}) => {
    const deleteHandler = () => {
        setToDos(todos.filter(element => element.task_id !== todo.task_id));
    };

    const doneHandler = () => {
        setToDos(todos.map(item => {
            if(item.task_id === todo.task_id){
                return {
                    ...item,
                    completed: !item.completed
                };
            }
            return item;
        }));
    };

    return (
        <div className="todo">
            <li className={`todo_item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={doneHandler} className="done_btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash_btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default ToDo;