import React from 'react'

const Todoitem = ({children}) => {
  return (
    <div>
      <h2>Here is your Todo List</h2>
     <ul style={{position:"fixed",marginLeft:"38%"}}>{children}</ul>
     </div>
  )
}

export default Todoitem