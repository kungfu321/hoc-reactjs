import React from "react";

function Author(props) {
  const { name, avatar } = props;
  return (
    <div>
      <img src={avatar} alt="Avatar" width="209" style={{ borderRadius: 100 }} />
      <h2>{name}</h2>
    </div>
  );
}

Author.defaultProps = {
  name: "No Name",
  avatar: "default avatar url"
}

export default Author;
