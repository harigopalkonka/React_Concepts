import './App.css';


import FunctionProp from './Props/FunctionProp';                                          // importing functionalprop file path
import ClassProp from './Props/ClassProp';                                                // importing classprops file path


import MapMethodFun from './MapMethodFunction/MapMethodFun';                              // import mapmenthod used functional component
import MapMethodClass from './MapMethodFunction/MapMethodClass';                          // import mapmethod used class component


import ReactFrgment from './Fragments/ReactFrgment';                                      // Import fragmnet file path


import ConditionalRedering from './Conditional/ConditionalRedering';                      // import conditional redenring file path


import UseEffect from './UseEffect/UseEffect';                                            // import useeffect function file path


import ApiCall from './ApiCall/ApiCall';                                                  // import apicall function file path


import Home from './Routeing/Home';                                                       // import homepage file path

import Dashboard from './Routeing/Dashboard';                                             // import dashbord file path

import About,{Order,Profile} from './Routeing/About';                                                     // import about apage path

import Login from './Routeing/Login';                                                     // import login page path


import {BrowserRouter,Routes,Route} from 'react-router-dom' ;                             // this import above importing of home,dashbord,about,login routeing page used

import List from './List/List';      // Import List File Path 

import ChildComponent from './DataFromChildToParent/ChildComponent';


function App() {
  
  const MapMethodArray = [23,24,25]                                                       // This Array is used in mapmethod.js file 
  
  return (                                                                                   
    <div className="App">

                                                                                      
      {/* // return below code jsx compoent createing */}
      <div>         
        <center className='jsxcomponent'>
          <h1 className='heading'> *** JSX Component ***</h1>
          <p>In JSX Component Used To Create every Html Element</p>
          <button>JSXComponetButton</button>
        </center>
      </div>



     {/* Props  */}
     {/* Props Used in Functional Compoent  */}
      <div className='FunctionalProps'>                                                                                 
        <h1 className='heading'>Props Used in Functional Component</h1>
        <FunctionProp name1='Uday' age1='24' />
      </div>
      {/* Props Used in Class Compoent */}
      <div className='ClassProps'>
        <h1 className='heading'>Props Used in Class Compoent</h1>
        <ClassProp name2='Hari' age2='26'/>
      </div>





      {/* Map Method Used in ReactJs  */}
      {/* Map Method Used in Functional Compoent  */}
      <h1 className='heading'>Map Method Function Used in Functional Compoent in React</h1>
      <div className='mapfunction'>
        {                                                                                   // In Above Const Array Of Every Element To CallBack Using map Function used functionalcomponent
          MapMethodArray.map((mapElement) => {
            return <MapMethodFun id={mapElement} />
          })
        }
      </div>
      {/* Map Method Used in Class Compoent  */}
      <h1 className='heading'>Map Method Function Used in Class Compoent in React</h1>
      <div className='mapclass'>
        {                                                                                   // In Above Const Array Of Every Element To CallBack Using map Function used classcomponent
          MapMethodArray.map((mapElement)=>{
            return <MapMethodClass id={mapElement} />
          })
        }
      </div>




      {/* By Using React Fragment using To Display in UI  */}
      <h1>React Fragment Used </h1>
      <ReactFrgment />
      
      


      {/* In Below div tag is onclick event handler event handler and also using below displayMessage and Displaymessage1 function also used  */}
      <div>
        {/* By Using To displayMessage function in below  */}
        <button onClick={displayMessage}>onClickEventMethod</button>           

        {/* By using To displayMessage1 function in below to pass paramenter and event can be handled */}
        <input type='text' onKeyUp= {(event) => {
            displayMessage1(10,event)
        }} />
      </div>




      {/* conditional redenring  */}
      <div>
        <h1>ConditionalRedering</h1>
        <ConditionalRedering />
      </div>




      {/* useEffect function  */}
      <div>
        <h1>This is UseEffect Function Used</h1>
        <UseEffect/>
      </div>
      




      {/* API Call Compoenent  */}
      <div>
        <h1>API Call</h1>
        <ApiCall />
      </div>





      {/* Roteing Pages compoents */}
      <div>
        <h1>App Component Routeings</h1>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/about' element={<About/>}>
              <Route path='order' element={<Order/>}/>
              <Route path='profile' element={<Profile/>}/>
            </Route>
            <Route path='/login' element={<Login/>} />
          </Routes>
        </BrowserRouter>
      </div>




      {/* List File  */}
      <div>
        <h1>List Are: </h1>
        <List />
      </div>


      {/* To Sending Data From Child To Parent  */}
      {/* below ChildToParentData function can be used in below operation  */}
      <div>
        <h1>This Data From Child Compoenent To Parent Compoenent</h1>
        <ChildComponent  getData={ChildToParentData}/>
      </div>


    </div>
  );
}



function ChildToParentData() {
  alert ("This is From Data Can Be Send From Child To Parent ")
}


function displayMessage() {

  alert("OnClickButton Pressed Display Values")

}



function displayMessage1(num,event) {

  alert("OnClickButton Pressed Display Values event handles"+ num)

  console.log(event.target)

}


export default App;
