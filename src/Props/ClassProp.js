import React, { Component } from 'react'

class ClassProp extends Component {
  render() {
    return (
      <div>
        <h1>Name:{this.props.name2}</h1>
        <h1>Age:{this.props.age2}</h1>
      </div>
    )
  }
}

export default ClassProp

// Used in class props this file and app.js file used

