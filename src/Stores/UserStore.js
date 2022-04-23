import { makeAutoObservable } from "mobx";

class UserStore {
  todoList = [
    { id: 1, task: "bath", complete: false, isEdit: false },
    { id: 2, task: "soap", complete: true, isEdit: false },
    { id: 3, task: "shopping", complete: false, isEdit: false },
    { id: 4, task: "reading", complete: false, isEdit: false },
  ];
  searchField = "";

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
  setSearchField(searchField) {
    this.searchField = searchField;
  }

  handleSearchChange(e) {
    console.log(e.target.value);
    this.setSearchField(e.target.value);
  }
  // filteredTodos(todo) {
  //   this.todoList.filter((todo) => {
  //     return todo.task.toLowerCase().includes(this.searchField.toLowerCase());
  //   });
  // }
  addTask(task, reset) {
    const newTodoList = [
      ...this.todoList,
      { id: Date.now(), task, complete: false },
    ];
    this.todoList = newTodoList;
    reset();
  }

  removeTask(id) {
    console.log("deleted");
    const newTodoList = this.todoList.filter((todo) => todo.id !== id);

    this.todoList = newTodoList;
  }
  onDoubleClickEdit(id, isEdit) {
    const updatedTodoList = this.todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isEdit };
      }
      return todo;
    });
    this.todoList = updatedTodoList;
  }

  editTask(id, task) {
    const updatedTodoList = this.todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          task,
          isEdit: false,
        };
      }
      return todo;
    });
    this.todoList = updatedTodoList;
  }

  CheckboxChange(id, complete) {
    const newTodoList = this.todoList.map((todo) => {
      if (id === todo.id)
        return {
          ...todo,
          complete,
        };
      return todo;
    });
    console.log(newTodoList, "status");

    this.todoList = newTodoList;
  }
}

export default UserStore;
