import React from "react";
import styles from './todo.module.css'
import { useState } from "react";
import Todoitem from "./todolist";
import TodoInput from "./todoInput"
import Todolist from "./todoItem"
import { v4 as uuidv4 } from 'uuid';
const Todo = () => {
 
  const [todos, setTodos] = useState([]);
  const addTodo = (newTodo)=>{
    setTodos([...todos,{id:uuidv4(),value:newTodo}])
  }
  return (
    <>
    <h2>TODO LIST</h2>
    <TodoInput addTodo={addTodo}/>
    <Todoitem>
      {todos.map((todo)=>(
        
        <Todolist key={todo.id} value={todo.value}/> 
        
      ))} 
    </Todoitem>
     
      </>
  );
};

export { Todo };
