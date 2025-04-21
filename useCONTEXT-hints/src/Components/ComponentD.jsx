import {useContext} from 'react'
import { UserContext } from './ComponentA'

function ComponentD(){
const user = useContext(UserContext)
  return(
    <div className="Component">
      <h1>ComponentD</h1>

      <p>Try me out, i will call my brother {user}</p>
    </div>
  )
}

export default ComponentD