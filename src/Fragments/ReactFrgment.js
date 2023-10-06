import React from 'react'

const ReactFrgment = () => {

  return (
    
    // <React.Fragment>
    //     <div>React Fragment Div 1</div>
    //     <div>React Fragment Div 2</div>
    // </React.Fragment>

    // or 

    // <>
    //     <div>React Fragment Div 1</div>
    //     <div>React Fragment Div 2</div>
    // </>

    // or 
    
    // By using Below ReactFragmet1 function 

    <div>
        <ReactFrgment1 />
    </div>
  )
}



const ReactFrgment1 = () => {
    return (
        <>
            <div>React Fragment Div 1</div>
            <div>React Fragment Div 2</div>
        </>
    )
}

export default ReactFrgment


// This File And App.js File

// Used  <React.Fragment></React.Fragment>   or   <> </> are Used
