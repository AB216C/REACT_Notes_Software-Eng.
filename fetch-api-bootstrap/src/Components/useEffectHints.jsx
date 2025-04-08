import {useState, useEffect} from 'react'
import axios from 'axios'
import { Button, Spinner} from 'react-bootstrap'

function UniquenesUseEffect() {

  const [count,setCount] = useState(0)



  const handleCount =() => {
    setCount(count+100)
  }

  //With useEffect, anytime an inclement button is clicked, code inside useEffect will run once
  //Because count was added to the depandancy array
  //UseEffect will run once when the component mounts and when the count changes.

  useEffect(()=> {
    console.log('UseEffect is called here with Dependancy')
  },[count]) 

  return(

    <div>

      <h1>Learning how useEffect works</h1>

      <p>Count:{count} </p>
      <button onClick={handleCount} >Inclement</button>

    </div>
  )
}

export default UniquenesUseEffect