
## useContext
useContext() = It is a react hook that allow you to share values between multiple level of components
without passing props through each level.

# Before useContext, our code were going to be as follows:

With code shown as follows, user named "John Bakame" were passed from app to Component A, all the way to Component D using "Props" OR "PROP drilling"

# APP Component

import { useState } from 'react'
import './App.css'
import ComponentA from './Components/ComponentA'


function App() {

  const [user,showUser] = useState("John Bakame")

  return (
    <div>
      Welcome, thank you for being here,  {user}
      <ComponentA user={user}/>
    </div>
  )
}

export default App

# CompnentA

import ComponentB from "./ComponentB"

function ComponentA(props) {

  return (

    <div class="Component">
      <h1>Component A</h1>

        <p>Thanks for visiting us,{props.user} </p>

        <ComponentB user={props.user} />
    </div>
  )
}

export default ComponentA


# CompnentB
import ComponentC from "./ComponentC"

function ComponentB(props) {

  return(
    <div className="Component">
      <h1>ComponentB</h1>
      <h3>Watchout, {props.user} is here</h3>

      <ComponentC user={props.user} />
    </div>

  )
}

export default ComponentB

# CompnentC
import ComponentD from "./ComponentD"

function ComponentC(props) {

  return(
    <div className="Component">
      <h1>Component C</h1>
      <p>Not body knows this guy, named {props.user} </p>
      <ComponentD user={props.user} />
    </div>
  )
}

export default ComponentC

# CompnentD
function ComponentD(props){

  return(
    <div className="Component">
      <h1>ComponentD</h1>

      <p>Try me out, i will call my brother, {props.user} </p>
    </div>
  )
}

export default ComponentD




