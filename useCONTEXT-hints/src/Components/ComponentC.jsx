import { useContext } from "react"
import { UserContext } from "./ComponentA"
import ComponentD from "./ComponentD"

function ComponentC() {

  const user = useContext(UserContext)
  return(
    <div className="Component">
      <h1>Component C</h1>
      <p>Not body knows this guy, named {user} </p>
      <ComponentD />
    </div>
  )
}

export default ComponentC