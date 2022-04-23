import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import useOutsideClick from "./Hooks/OutsideClick";

function EditForm(props) {
  const wrapperRef = useRef(null);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      task: props.task,
    },
  });
  const onSubmit = (data) => {
    props.user.editTask(props.id, data.task);
  };
  const onEditOutsideClick = () => {
    props.user.onDoubleClickEdit(props.id, false);
  };
  useOutsideClick(wrapperRef, onEditOutsideClick);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <span ref={wrapperRef}>
        <input {...register("task")} />
      </span>
    </form>
  );
}

export default EditForm;
