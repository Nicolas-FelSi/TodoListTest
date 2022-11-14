import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import FilterTodo from "./Filter";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [filterTextvalue, updateFilterText] = useState("all");

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const remoteArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(remoteArr);
  };

  const completeTodo = (id) => {
    let updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  const fiteredTodoList = todos.filter((todos) => {
    if (filterTextvalue === "finished") {
      return todos.isComplete === true;
    } else if (filterTextvalue === "pending") {
      return !todos.isComplete;
    } else {
      return todos;
    }
  });

  function onFilterValueSelected(filterValue) {
    updateFilterText(filterValue);
  }

  return (
    <div className="container">
      <h1>Quais os planos pra hoje?</h1>
      <div className="form-filter">
        <TodoForm onSubmit={addTodo} />
        <FilterTodo filterValueSelected={onFilterValueSelected} />
      </div>
      <Todo
        todos={fiteredTodoList}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
