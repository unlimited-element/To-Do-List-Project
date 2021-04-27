import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {
  const handleTrashButton = () => {
    setTodos(todos.filter(el => el.id !== todo.id))
  };
  const handleCompleteButton = () => {
    setTodos(todos.map(items => {
      if(items.id === todo.id) {
        return {...items, completed: !items.completed}
      }
      return items
    }))
  }

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</li>
        <button onClick={handleCompleteButton} className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={handleTrashButton} className="trash-btn">
          <i className="fas fa-trash"></i>
        </button >
    </div>
  )
};

export default Todo;
