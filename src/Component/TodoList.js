import React from "react";
import { inject, observer } from "mobx-react";
import Todo from "./Todo";
import "./index.css";

function TodoList(props) {
  const filteredTodos = props.user.todoList.filter((todo) => {
    return todo.task
      .toLowerCase()
      .includes(props.user.searchField.toLowerCase());
  });
  return (
    <>
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo) => {
          return <Todo {...todo} />;
        })
      ) : (
        <p>No Todo Found</p>
      )}
    </>
  );
}

export default inject("user")(observer(TodoList));
