import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { ImCheckmark } from "react-icons/im";
import { FaEdit } from "react-icons/fa";
import TodoForm from "./TodoForm";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div className="complete-icon" onClick={() => completeTodo(todo.id)}>
        <ImCheckmark />
      </div>
      <div className="todo-text" key={todo.id}>
        <p>{todo.text}</p>
      </div>
      <div className="icons">
        <div className="delete-icon" onClick={() => removeTodo(todo.id)}>
          <MdDeleteForever />
        </div>
        <div
          className="edit-icon"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        >
          <FaEdit />
        </div>
      </div>
    </div>
  ));
}

export default Todo;
