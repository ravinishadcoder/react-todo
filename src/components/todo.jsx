import React from "react";
import styles from './todo.module.css'
import { useState } from "react";
import Todoitem from "./todolist";
import TodoInput from "./todoInput"
import Todolist from "./todoItem"
import { v4 as uuidv4 } from 'uuid';
const Todo = () => {
 
  const [todos, setTodos] = useState([]);
  //console.log(todos)
  const addTodo = (newTodo)=>{
    setTodos([...todos,{id:uuidv4(),value:newTodo,done:false}])
  }
  const Removetodo=(id)=>{
    setTodos(todos.filter((todo)=>todo.id!=id))
    }
    
  return (
    <>
    <h2>TODO LIST</h2>
    <TodoInput addTodo={addTodo}/>
    <Todoitem Removetodo={Removetodo}>
      {todos.map((todo)=>(
        
        <Todolist key={todo.id} value={todo.value} id={todo.id} Removetodo={Removetodo} status={todo.done} /> 
        
      ))} 
    </Todoitem>
     
      </>
  );
};

export { Todo };
