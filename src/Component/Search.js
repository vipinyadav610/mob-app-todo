import React from "react";
import { inject, observer } from "mobx-react";

function Search(props) {
  return (
    <section>
      <div style={{ marginBottom: "50px" }}>
        <input
          type="text"
          placeholder="Search your todo...."
          value={props.user.searchField}
          style={{
            alignItems: "center",
            padding: "10px 10px",
            width: "500px",
            marginRight: "5px",
          }}
          onChange={props.user.handleSearchChange}
        />
      </div>
    </section>
  );
}

export default inject("user")(observer(Search));
