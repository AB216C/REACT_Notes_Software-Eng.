import { useState } from 'react'
import './App.css'
import ComponentA from './Components/ComponentA'
/*
useContext() = It is a react hook that allow you to share values between multiple level of components
without passing props through each level.

SET UP useContext:

PROVIDER COMPONENT:
1. import {createcontext} from "react"
2. export const MyContext = createContext
3. <MyContext.Provider value = {value}>
      <Child/>
   <MyContext.Provider>


CONSUMER COMPONENT
1. Import React , {useContext} from "react"
   import {MyContext} from "App" 
2. const value = useContext(MyContext)
*/

function App() {


  return (
    <div>
      
      <ComponentA/>

    </div>
  )
}

export default App
