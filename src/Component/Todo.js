import React from "react";
import EditForm from "./EditForm";
import { inject, observer } from "mobx-react";

function Todo(props) {
  const removeTask = () => {
    props.user.removeTask(props.id);
  };
  const onCheckboxChange = (e) => {
    props.user.CheckboxChange(props.id, e.target.checked);
  };
  const onDoubleClickEdit = () => {
    props.user.onDoubleClickEdit(props.id, true);
  };
  return (
    <>
      <div
        style={{
          margin: "0 50px",
        }}
      >
        <input
          type="checkbox"
          checked={props.complete}
          onChange={onCheckboxChange}
          style={{ cursor: "pointer" }}
        />
        {props.user.isEdit ? (
          <EditForm {...props} />
        ) : (
          <span
            className={props.complete ? "strike" : ""}
            onDoubleClick={onDoubleClickEdit}
            style={{ cursor: "pointer" }}
          >
            {props.task}
          </span>
        )}

        <span
          style={{ cursor: "pointer", float: "right", fontWeight: "bold" }}
          onClick={removeTask}
        >
          x
        </span>
        <hr />
      </div>
    </>
  );
}

export default inject("user")(observer(Todo));
