import React, { useState } from 'react'

const Todolist = ({value,id,Removetodo,status}) => {
    const [line,setLine]=useState(status);
    const ToogleTastStatus = ()=>{
      setLine(!status)
    }
   
  return <div > 
    <input type="checkbox" 
    
  checked= {status}
  onChange={ToogleTastStatus}
  /> <span style={{ textDecoration:line?"line-through":"none"}}>{value}</span> <button
  onClick={()=>{
    Removetodo(id)
  }}
  >Remove</button></div>
 
      
  
}

export default Todolist