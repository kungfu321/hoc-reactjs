import React from "react";

function Author(props) {
  return (
    <div>
      <input
        placeholder="Enter your name"
        defaultValue={props.name}
        onChange={(e) => props.handleChangeName(e.target.value)}
      />
    </div>
  );
}

export default Author;
