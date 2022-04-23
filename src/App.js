import React, { useState } from "react";
import InputForm from "./Component/InputForm";
import { inject, observer } from "mobx-react";
import TodoList from "./Component/TodoList";
import Search from "./Component/Search";
import Pagination from "./Component/Pagination";
import "./App.css";

function App(props) {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [todosPerPage, setTodosPerPage] = useState(3);

  // const indexOfLastTodo = currentPage * todosPerPage;
  // const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  // const currentTodos = props.user.todolist.slice(
  //   indexOfFirstTodo,
  //   indexOfLastTodo
  // );
  // const paginate = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };
  return (
    <div className="App">
      <h1>Todo list</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <InputForm />
      </div>
      <div>
        <Search />
      </div>

      <TodoList />
      {/* <TodoList todolist={currentTodos} /> */}

      {/* <Pagination
        todosPerPage={todosPerPage}
        totalTodos={props.user.todoList.length}
        paginate={paginate}
      /> */}
    </div>
  );
}

export default inject("user")(observer(App));
