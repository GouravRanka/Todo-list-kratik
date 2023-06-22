import React, { useState } from "react";
import AddTodo from "./addtodo";

export default function Todolist({toggle}) {
  const [todoList, setTodoList] = useState([
    { Id: 1, Name: "Going to school" },
    { Id: 2, Name: "Going to market" },
  ]);

  return (
    <div>
        <AddTodo todoList={todoList} setTodoList={setTodoList} />
      {todoList.map((ele, key) => (
          <div>
          <p>{ele.Name}  </p>
          {/* <button>Edit</button> */}
        </div>
      ))}
    </div>
  );
}
