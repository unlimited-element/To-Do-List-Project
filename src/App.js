import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Components/form';
import ToDoList from './Components/todo list';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();

  }, []);

  useEffect(() => {
    const handleFilters = () => {
      switch(status) {
        case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
        case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
        default:
        setFilteredTodos(todos);
      }
    };
    handleFilters();
    saveLocalTodos();
  }, [todos, status]);

const saveLocalTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const getLocalTodos = () => {
  if (localStorage.getItem("todos" === null)) {
    localStorage.setItem("todos", JSON.stringify([]));
  } else {
    let todoLocal = JSON.parse(localStorage.getItem("todos"));
    setTodos(todoLocal);
  }
}


  return (
    <div className="App">
        <h1>
          Today's To-Do List
        </h1>
        <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus} setFilteredTodos={setFilteredTodos}/>
        <ToDoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
