
import {useState} from 'react'
import Navigation from "./Navigation"
function ConditionalsWithAnd() {


  const [showDog,setShowDog] = useState(false)


  return (

    <div>
      <Navigation/>
      <h1>Hello all</h1>
      <p>And component-And Operator Explained</p>
      <h3>Do you want to see a dog?</h3>
      <button onClick={()=>setShowDog(true)} >Yes</button>
      <button onClick={()=>setShowDog(false)} >NO</button>



{/*This is And opeator*/}

      {showDog && 
      <div className="showdog" > <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/></div>}

      {/*This is and operator*/}
    </div>
  )
}

export default ConditionalsWithAnd