import React,{useEffect, useState} from 'react'

const UseEffect = () => {

  const [timer,setTimer] = useState(0);

  const [couter,setCouter] = useState(0);

  useEffect ( () => {
    // case 1:- 
    console.log("this is use effect function")

    // case 2 : by using const [timer,settimer] = usestate(0) compoennt
    console.log("this is use effect by using usestate")

    // Case3 : by using const[couter,setCounter] = usesatte(0) componenr
    console.log("this is using use effect function by using add couter depenceny")

  },[couter])
  return (
    <div>
      {/* Case 1 heading  */}
      <h1>This UseEffect of File {console.log("this is inside return compoent")}</h1>

      {/* case 2  */}
      <h1>Timer : {timer} {console.log("this is inside component by using usestate")}</h1> 
      <button onClick={ () => {
        setTimer(timer + 1)
      }}>update time</button>

      {/* case 3 */}
      <h1>timer : {timer} {console.log("this inside compoent by using usestate by add depency of couter")}</h1>
      <button onClick={ () => {
        setCouter(couter + 1)
      }}>updateCouter</button>

    </div>
  )
}

export default UseEffect

// this file and app.js file used

// useeffect method can be exceute after return statemnet 

// By Using useState to used useffect rendering 
