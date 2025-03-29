import {useState} from 'react'

function Salutation () {
  const [names,setName] = useState("Jean Bosco")

  const changeName = () => {
    setName("Iréne Gakwaya")
  }

  return (
    <div>
      <p>Greetings to you {names} </p>
      <button onClick={changeName} >Make Changes</button>
    </div>
  )
}

export default Salutation