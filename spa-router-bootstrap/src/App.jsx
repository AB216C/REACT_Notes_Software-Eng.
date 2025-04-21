
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import NavBar from './Components/NavBar';
import NotFound from './Components/NotFound';
import Users from './Components/Users';
import UserTodos from './Components/UserTodos';
import UserForm from './Components/UserForm';

function App() {

  return (
    <>

    <NavBar/>

    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/users" element={<Users/>} />
      <Route path="/user-todos/:userId" element={<UserTodos/>} />
      <Route path="/user-form" element={<UserForm/>} />
      <Route path="*" element={<NotFound/>} />

    </Routes>
    </>
  )
}

export default App
