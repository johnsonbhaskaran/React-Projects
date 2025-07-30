import { useState, useRef } from "react";
import "./CSS/ToDo.css";
import { useEffect } from "react";
import ToDoItems from "./ToDoItems";

let count = 0;

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
    setTodos([...todos, { no: count++, text: inputRef.current.value, display: "" }]);
    inputRef.current.value = "";
    localStorage.setItem("todos_count", count);
  };

  //useEffect Hook used to store todos persistently in LocalStorage
  useEffect(() => {
    const localData = localStorage.getItem("todos");
    setTodos(JSON.parse(localData));
    count = localStorage.getItem("todos_count");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log(todos);
      localStorage.setItem("todos", JSON.stringify(todos));
    }, 100);
  }, [todos]);

  return (
    <div className='todo-container'>
      <div className='todo-header'>To-Do List</div>
      <div className='todo-add'>
        <input ref={inputRef} type='text' placeholder='Add You Task' className='todo-input' />
        <div
          onClick={() => {
            add();
          }}
          className='todo-add-btn'
        >
          ADD
        </div>
      </div>
      <div className='todo-list'>
        {todos.map((todo, index) => {
          return (
            <ToDoItems
              key={index}
              setTodos={setTodos}
              no={todo.no}
              display={todo.display}
              text={todo.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ToDo;
