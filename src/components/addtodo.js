import React, { useState } from "react";

export default function AddTodo({ todoList, setTodoList }) {
  const [myTodo, setMyTodo] = useState("");

  const handleChange = (e) => {
    setMyTodo(e.target.value);
  };

  const addData = () => {
    setTodoList([...todoList, { Id: 3, Name: myTodo }]);
    console.log(todoList);
  };
  return (
    <div>
      <input onChange={(e) => handleChange(e)} type="text" name="task" />
      <button onClick={addData}>Add todo</button>
    </div>
  );
}
