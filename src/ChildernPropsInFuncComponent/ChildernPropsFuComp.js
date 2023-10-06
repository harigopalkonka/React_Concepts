import React from 'react'

const ChildernPropsFuComp = (props) => {
  console.dir(props)
  return (
    <div>
      <h3>This is Child Props Used in Functional Compoent</h3>
      <p>Childern Props</p>
      <p>{props.childern}</p>
    </div>
  )
}

export default ChildernPropsFuComp


// In This File And index.js File