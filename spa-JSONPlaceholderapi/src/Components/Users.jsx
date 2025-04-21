import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Users = () => {

  const [users, setUsers] = useState([]);     // State to store users
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null);    // Error state


   // useEffect to fetch users when component mounts
   useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(`Failed to fetch users: ${error.message}`);
        setLoading(false);
      });
      
  }, []); // Empty dependency array ensures this runs only once

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>{error}</p>;


  return (
    <div>
      <h1>This is Users List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <p><b>Name:</b> {user.name}</p>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Phone:</b> {user.phone}</p>
            <Link to={`/user-todos/${user.id}`}>Todo List</Link>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Users