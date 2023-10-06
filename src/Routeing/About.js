import React from 'react'

import { Outlet } from 'react-router-dom'               // outlet and link By using Nested routeing using child class
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div>
        <button><Link to="order">Order</Link></button>
        <button><Link to="profile">Profile</Link></button>
      </div>
      <h1>*** About Page ***</h1>
      <Outlet/>
    </div>
  )
}

// Below Two Function are Nested Routeing Elements 

export function Order() {
  return (
    <div>
      <h1> This Is Nested Orders Component</h1>
    </div>
  )
}


export function Profile() {
  return (
    <div>
      <h1> This Is Nested Profile Component</h1>
    </div>
  )
}

// Nested Routeing This file and app.js file


export default About


// By using Link Tag Page Not Reload , using anchor tag page can be reload

