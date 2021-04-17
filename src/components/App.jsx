import React, { useState } from "react";
import TodoItem from "./Todoitem";

function App() {
  const [item, setItem] = useState("");
  const [changeItem, setChangeItem] = useState([]);

  function handleChange(event) {
    const newItem = event.target.value;
    setItem(newItem);
  }

  function handleClick() {
    setChangeItem((prevValue) => {
      return [...prevValue, item];
    });
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          name="listItem"
          value={item}
          onChange={handleChange}
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {changeItem.map((todoItem, index) => {
            return <TodoItem key={index} item={todoItem} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;