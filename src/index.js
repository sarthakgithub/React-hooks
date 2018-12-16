import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Form from "./form.jsx";
import "./styles.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  const toggleComplete = i => () => {
    setTodos(
      todos.map((todo, index) => {
        if (i === index) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    );
  };

  const reset = () => {
    setTodos([]);
  };

  return (
    <div>
      <Form
        onSubmit={text => setTodos([{ text, completed: false }, ...todos])}
      />
      <div>
        {todos.map(({ text, completed }, i) => {
          return (
            <div
              onClick={toggleComplete(i)}
              style={{ textDecoration: completed ? "line-through" : "none" }}
            >
              {text}
            </div>
          );
        })}
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
