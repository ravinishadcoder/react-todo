import React from "react";
import styles from './todo.module.css'
import { useState } from "react";
import Todoitem from "./todolist";

const Todo = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <>
    <h2>TODO LIST</h2>
    <div className={styles.input}>
      
      <input style={{height:"40px", width:"300px",borderRadius:"15px"}}
        type="text"
        placeholder="Add to do"
        value={value}
        onChange={(e) =>{ 
        setValue(e.target.value)
        //console.log(e.target.value)
        }
        }
      />
      
      <button style={{height:"45px", width:"45px",fontSize:"15px",borderRadius:"15px"}}
      onClick={()=>{
          setTodos([...todos,{id:Date.now(),value:value}]);
          setValue("");
          
      }}
      >+
      </button>
      </div>
      <div>
      {todos.map((todo)=>(
          <Todoitem key={todo.id} todo={todo} ></Todoitem>
      ))}
      </div>
      </>
  );
};

export { Todo };
