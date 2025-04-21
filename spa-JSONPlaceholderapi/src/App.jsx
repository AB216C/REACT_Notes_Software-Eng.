import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import HomePage from './Components/HomePage'
import Users from './Components/Users'
import NavBar from './Components/NavBar'
import NotFound from './Components/NotFound'
import UserTodos from './Components/UserTodos'

function App() {

  return (
    <div>

      <NavBar/>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/usertodos/:userId" element={<UserTodos/>} />

        <Route path="*" element={<NotFound />} />
      </Routes>


    </div>
  )
}

export default App
