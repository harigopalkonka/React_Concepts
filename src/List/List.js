import React from 'react'

const List = () => {
  
  const  list = ["HTML","CSS","JAVASCRIPT"]


  return (
    <div>
       {
        list.map( (l) => <li> .{l}</li>)
      } 
    </div>
    
  )
}

export default List
