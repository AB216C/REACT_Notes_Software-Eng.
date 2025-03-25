//Practicing useState: Practice 1

import {useState} from 'react';
function Counter() {

  const [count,setCount] = useState(0)    //Initial state Value is Zero

  const handleInclement = () => {
    setCount(count+2)   //Updating the state
  };

  const handleDeclement = () => {
    setCount(count-1)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleInclement}>Inclement</button>
      <button onClick={handleDeclement}>Declement</button>
    </div>
  )

}

export default Counter