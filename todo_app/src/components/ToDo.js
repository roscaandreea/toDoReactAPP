import React from 'react';

const ToDo = ({text}) => {
    return (
        <div className="todo">
            <li className="todo_item">{text}</li>
            <button className="done_btn">
                <i className="fas fa-check"></i>
            </button>
            <button className="trash_btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default ToDo;