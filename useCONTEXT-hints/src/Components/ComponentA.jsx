import { createContext, useState } from "react"
import ComponentB from "./ComponentB"

export const UserContext = createContext()

function ComponentA() {
  const [user,showUser] = useState("John Bakame")
  return (

    <div class="Component">
      <h1>Component A</h1>

        <p>Thanks for visiting us,{user} </p>

        <UserContext.Provider value={user}>
         <ComponentB user={user} />
        </UserContext.Provider>

    </div>
  )
}

export default ComponentA