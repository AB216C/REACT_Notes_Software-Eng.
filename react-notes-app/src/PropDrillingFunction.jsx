import {useState} from 'react'
import {string} from 'prop-types'


const Socialize=(props)=>{
  const [name, setName] = useState(props.initalName)
  const changeName = () => {
    setName("Jean Pierre")
  }

  return (
    <div>
      <p>{name}, Said "Hello My people"</p>
      <p>{props.customMessage}</p>
      <button onClick={changeName} >Change Names</button>
   
    </div>
  )
}

Socialize.propTypes = {
  customMessage:string,
  initialName:string,
}

export default Socialize