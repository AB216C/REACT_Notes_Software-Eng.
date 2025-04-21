import ComponentC from "./ComponentC"
import { UserContext } from "./ComponentA"
import { useContext } from "react"

function ComponentB() {
const user = useContext(UserContext)
  return(
    <div className="Component">
      <h1>ComponentB</h1>
      <h3>Watchout, {user} is here</h3>

      <ComponentC/>
    </div>

  )
}

export default ComponentB