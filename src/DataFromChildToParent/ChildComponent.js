import React from 'react'

const ChildComponent = (Props) => {                

  const name = "Hari"

  return (
    <div>
      <h1>This Child Component Data</h1>
      <button onClick={() => Props.getData(name)}>Click</button>
    </div>
  )
}

export default ChildComponent

// Step 1 Create Child Compoent Of Function

// Step 2 Import Child Comp To App.js File

// Step 3 Create Parent Comp of Function TO Pass in App.js File Child To Parent function 

// Step 4 call Parent Function To Child Component in App.js File

// Step 5 By Using Props TO Get Parenent Data From Child Component In Thid ChildComponent.js File

// By Using This File And App.js File