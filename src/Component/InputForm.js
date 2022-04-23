import React from "react";
import { inject, observer } from "mobx-react";
import { useForm } from "react-hook-form";

function InputForm(props) {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    props.user.addTask(data.task, reset);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Enter your todo...."
          style={{
            alignItems: "center",
            padding: "20px 30px",
            width: "800px",
            marginRight: "5px",
          }}
          {...register("task")}
        />
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            marginBottom: "50px",
            padding: "20px 30px",
          }}
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </>
  );
}

export default inject("user")(observer(InputForm));
