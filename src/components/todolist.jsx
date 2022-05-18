import React, { useState } from 'react'
import styles from './todo.module.css'
 const Todoitem = ({todo}) => {
     const [isCompleted,setIsCompleted]=useState(todo.isCompleted)
  return (
    <div className={styles.todo} key={todo.id}>
    <input type="checkbox" checked={isCompleted}
    style={{height:"25px",width:"25px"}}
    onChange={(e)=>{
     //console.log(e.target.checked)
     setIsCompleted(e.target.checked)
    }}
    />   
   <div className={isCompleted ? styles.striked :""}>{todo.value}</div>
   
   </div>
  )
}

export default Todoitem