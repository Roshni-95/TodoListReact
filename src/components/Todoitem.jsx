import React, { useState } from "react";

function TodoItem(props) {
  const [style, setStyle] = useState(false);

  function handleClick() {
    setStyle(() => {
      if (style === false) {
        return true;
      } else if (style === true) {
        return false;
      }
    });
  }

  return (
    <li
      style={{ textDecoration: style ? "line-through" : "none" }}
      onClick={handleClick}
    >
      {props.item}
    </li>
  );
}

export default TodoItem;