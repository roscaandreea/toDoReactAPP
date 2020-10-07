import React from 'react';


const Form = ({inputText,setInputText,todos,setToDos,status,setStatus}) => {
    const inputTextHandler = e => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitToDoHandler = e => {
        e.preventDefault();
        setToDos([...todos,{
            text: inputText,
            completed: false,
            task_id: Date.now()  //function which allows us to get the number of miliseconds elapsed since January 1, 1970.
            }
        ]);
        setInputText("");
    };

    const statusHandler = e => {
        setStatus(e.target.value);
    };
    return (
        <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitToDoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onClick ={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="done">Done!</option>
          <option value="work_in_progress">Work in progress...</option>
        </select>
      </div>
    </form>
    );
};

export default Form;