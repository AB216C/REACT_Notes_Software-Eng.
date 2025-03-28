import styles from "./Character.module.css"
import {useState} from 'react'
function CharacterTwo(props) {

  const [name,setName] = useState(props.name)
  const [type,setType] = useState(props.type)
  const [level,setLevel] = useState(0)

  //setLevel or setTypes are always used in case we want to create a function and a button where 
  //clicking a button will trigger a function to execute

  const levelUp=()=> {
    setLevel(level+1)
  }

  return (
    <div className={styles.card2} >

      <p>Name:{name} </p>
      <p>Type:{type} </p>
      <p>Level:{level} </p>
      <button onClick={levelUp} >LevelUP</button>
    </div>
  )
}

export default CharacterTwo