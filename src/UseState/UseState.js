import React,{useState} from 'react'          // step 1: add {useState} in import 
 
const UseState = () => {
  
  const [count,setCount] = useState(0)                                        // Step 2: To Use useState Method Initlized and pass inlize value is '0 '
 
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={()=>setCount(count + 1)}>UseStateButton</button>
    </div>
  )
}

export default UseState


// In this file used and index.js file