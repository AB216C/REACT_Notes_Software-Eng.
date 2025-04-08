import Navigation from "./Navigation"
import {useState} from 'react'

function ConditionalWithTernary(){
    const name = "John"

    const [showCat, setShowCat] = useState(false)

  return(

    <div>

      <Navigation/>

      <h1>We are more focused on Ternary</h1>

      <h3>Say Something, {name} </h3>

      <p>Do you want to see a cat?</p>

      <button onClick={()=>setShowCat(true)} >Yes</button>
      <button onClick={()=>setShowCat(false)} >NO</button>


      {/*This is ternary operator*/}

      {showCat ? <div><img src="https://plus.unsplash.com/premium_photo-1673967831980-1d377baaded2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D"/> </div> :<p>Showcat is false. Not allowed</p>}

    </div>
  )
}

export default ConditionalWithTernary