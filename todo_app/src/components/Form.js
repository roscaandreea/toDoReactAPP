import React from 'react';


const Form = ({setInputText}) => {
    const inputTextHandler = e => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitToDoHandler = e => {
        e.preventDefault();
    };
    return (
        <form>
      <input onClick={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitToDoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="done">Done!</option>
          <option value="work_in_progress">Work in progress...</option>
        </select>
      </div>
    </form>
    );
};

export default Form;