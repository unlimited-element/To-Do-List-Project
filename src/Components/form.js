import React from 'react';

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  const handleInputText = (e) => {
    setInputText(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {text: inputText, completed: false, id: Math.random() * 100}
    ])
    setInputText('');
  };
  const handleStatus = (e) => {
    setStatus(e.target.value)
  }
  return (
    <form>
      <input value={inputText} onChange={handleInputText} type="text" className="todo-input"/>
      <button onClick={handleSubmit} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={handleStatus} name="todos" className="filter-todos">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
          </select>
      </div>
    </form>
  )
}

export default Form;
