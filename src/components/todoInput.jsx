import React from 'react';
import { useState } from 'react';
import styles from './todo.module.css';

const TodoInput = ({addTodo}) => {
const [value, setValue] = useState("");
  return (
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
          //setTodos([...todos,{id:Date.now(),value:value}]);
          addTodo(value)
          setValue("");
          
      }}
      >+
      </button>
        

    </div>
  )
}

export default TodoInput