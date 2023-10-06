import React from 'react'

const ConditionalRedering = () => {
    
  return (
    <div>
      <React.Fragment>
        <Header />
        {
            isAdmin ? <Admin/> : null
        }
      </React.Fragment>
    </div>
  )
}

const ConditionalRederingcompoent = true;

const Header = () => {
    return (
        <div>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                {
                    ConditionalRederingcompoent ? (<li>LogOut</li>) : (<li>LogIn</li>)
                }
            </ul>
        </div>
    )
}

const isAdmin = false;

const Admin = () => {
    return(
        <div>
            <h1>This Render Component !!!</h1>
        </div>
    )
}

export default ConditionalRedering


// This File and App.js file

// In Above conditionalredering varibale is true to "logout" or else "login" and also apply same logic in isadmin function

// In Above isAdmin varibale is flase headeing not display and true to display headeing
