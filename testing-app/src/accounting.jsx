import { useState } from 'react'

function Counting () {
  const [count,setCount] = useState(0)

  const HandleAccount = () => {
    setCount(count + 1)
  }

  return(
    <div>
      <h1>Count:{count} </h1>
      <button onClick={HandleAccount} >Inclement</button>
    </div>
  )
}

export default Counting