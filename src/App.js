import logo from './logo.svg';
import './App.css';
import Todolist from './components/todolist';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
  <h1>
    Todo List App js

    <Todolist/>
  </h1>
    </div>
  );
}

export default App;

export const data = ()=>{
console.log("FSSDS")
}