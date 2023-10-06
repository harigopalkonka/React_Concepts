import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



import FunctionalComponent from './Components/FunctionalComponent';                         // import functional compoent of file path
import ClassComponent from './Components/ClassComponent';                                   // import class component of file path

import DiffFunctionalCompoent from './DiffrentWayToFunctionalCompoenentCreate/DiffFunctionalCompoent';      // import file diffrentwaycreate function componet createing file path

import ChildernPropsFuComp from './ChildernPropsInFuncComponent/ChildernPropsFuComp';       // Import file Childprops Using to display in parent compoent

import UseState from './UseState/UseState';                                                 // import React Hook of useState Method file 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App />

    {/* To Call Functional Component  */}
    <div className='FunctionalComp'>
      <center>
        <h1 className='heading'>Functional Compoent</h1>
        <FunctionalComponent /> 
      </center>  
    </div>


    {/* To Call Class Component */}
    <div className='ClassComp'>
      <center>
        <h1 className='heading'>Functional Compoent</h1>
        <ClassComponent />
      </center>
    </div>
    

       
    {/* call the diffrent way to create functional Components  */}
    <div className='difffuncomp'>
      <center>
        <h1 className='heading'>Diffrent Types To Create Functional Components</h1>
        <DiffFunctionalCompoent />
      </center>
     
    </div>
                       

    {/* call the child props of data in functional compoent file  */}
    <div className='childprops'>
      <center>
        <ChildernPropsFuComp name='xyz'>
          <button>B1</button>
          <button>B2</button> 
        </ChildernPropsFuComp>
      </center>
    </div>
    

    {/* UseState Method  */}
    <div className='usestate'>
      <center>
        <h1>React Hook Of useState</h1>
        <UseState />
      </center>
    </div>
    


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
