//useEffect ()  = React Hook that tells REACT TO DO SOME CODE WHEN(pick one): 
//                  This component re-renders
//                  This component mounts-Creating a dependance to the DOM
//                  The state of value - Change in a state of a value


//useEffect(function, [dependancies])
//useEffect synonym include "side code"


//1. useEffect(()=>{})             //run after every re-render
//2. useEffect(()=>{}, [])          //Runs only on mounts
//3. useEffect(()=>{}, [value])      // Runs on mount + on Value Changes

//USES

// #1   Event Listener
// #2   DOM Manupulation
//#3    Subscriptions(real-time updates)
//#4    Fetching data from API
//#5    Clean up when a component unmounts

//Mounting: Adding a component to the DOM, Unmounting: removing a component from the DOM

import React,{useState, useEffect}  from 'react'


function FirstComponent () {

const [count, setCount] = useState(0)
const [color, setColor] = useState("")

//document.title = `Count:$(count) ${color}` give same results with no effect hook, however 
//effect hook keeps code organized. Helps to run clean up code

useEffect(()=> {
  document.title = `Count:${count} ${color}`
}, [count,color])               //Adding count to the array gives the same results as not adding array as a dependancy


function AddCount() {
  setCount(count => count + 1)
}

function SubstractCount() {
  setCount(count=> count - 1)
}

function changeColor() {
  setColor(count => count === "green" ? "red": "green")
}

  return (
    <div>
      <h1>Ferdinand Niyongira</h1>

      <p style={{color:color}} >Count:{count} </p>
      <button onClick={AddCount} >Add Count</button>
      <button onClick={SubstractCount} >Substract Count</button>
      <br></br>
      <button onClick={changeColor} >Change Color</button>
    </div>
  )
}


export default FirstComponent