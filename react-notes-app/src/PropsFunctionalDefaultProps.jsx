//Default props using functions

import React from 'react'

function PersonalInfoFunc(props) {
  return (
    <div>
        <Person name="Kapill" eyecolor="blue" age="23" ></Person>
        <Person name="Matata" eyecolor="black" age="40" ></Person>
        <Person name="Eric" age="23" ></Person>
        <Person age="23" ></Person>
        <Person eyecolor="orange" ></Person>
    </div>
  )
}

function Person (props) {
  return (
    <div>
      <h1>Function-based-props</h1>
      <p>Name:{props.name}</p>
      <p>EyeColor:{props.eyecolor} </p>
      <p>Age:{props.age} </p>
    </div>
  )
}

Person.defaultProps = {
  name:"Rachel",
  eyecolor:"Deep Orange",
  age: "65"
}

export default PersonalInfoFunc