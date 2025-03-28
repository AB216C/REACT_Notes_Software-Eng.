//Default props using class

import React, {Component} from "react"

class PersonalInfo extends Component {
  render() {
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
}  

class  Person extends Component {
  render() {
    return (
      <div>
        <h1> class-Based default Props</h1>
        <p>Name:{this.props.name} </p>
        <p>Eyecolor:{this.props.eyecolor} </p>
        <p>Age:{this.props.age} </p>
      </div>
    )
  }
}

Person.defaultProps = {
  name:"Jonathan",
  eyecolor:"Deep blue",
  age: "45"
}

export default PersonalInfo