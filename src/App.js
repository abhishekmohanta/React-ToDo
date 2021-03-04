import React, { useState } from "react";
import "./styles.css";
import Button from "@material-ui/core/Button";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import TodoItems from "./TodoItems";

export default function App() {
  const [item, setItem] = useState("");
  // creating empty array for storing the list
  const [newItem, setNewItem] = useState([]);

  function itemEvent(event) {
    setItem(event.target.value);
  }

  function itemList() {
    setNewItem((previousVal) => {
      return [...previousVal, item];
    });
    setItem(""); //emptying input field
  }

  return (
    <>
      <div className="App">
        <h1>ToDo List</h1>
        <br />
        <input
          type="text"
          placeholder="Add Items"
          onChange={itemEvent}
          value={item}
        />
        {/* added buttons from material UI */}
        <Button onClick={itemList}>
          <NoteAddIcon />
        </Button>
        <ol>
          {/* displaying empty array one by one */}
          {newItem.map((val, index) => {
            return <TodoItems key={index} text={val} />;
          })}
        </ol>
      </div>
    </>
  );
}
