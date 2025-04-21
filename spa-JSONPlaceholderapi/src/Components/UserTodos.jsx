import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserTodos = () => {

  const { userId } = useParams();          // Get the userId from URL parameters
  const [todos, setTodos] = useState([]);   // State to store the user's todos
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  // Fetch user and todos for the specific userId
      useEffect(() => {
        const fetchUserAndTodos = async () => {
            try {
                const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
                setUser(userResponse.data);
    
                const todosResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
                setTodos(todosResponse.data);
            
            } catch (error) {
                setError(`Failed to fetch: ${error.message}`);
            
            } finally {
                setLoading(false);
            }
        };
    
        if (userId) {
            fetchUserAndTodos();
        }
    }, [userId]); // Refetch todos if userId changes

    if (loading) return <p>Loading User Todos...</p>;
    if (error) return <p>{error}</p>;




  return (
    <div>
      <h2>Todos for: {user.name}</h2>
      <ul>
          {todos.map(todo => (
              <li key={todo.id}>
                  <p><b>Title:</b> {todo.title}</p>
                  <p><b>Completed:</b> {todo.completed ? "✅" : "❌"}</p>
              </li>
          ))}
      </ul>
    </div>
  )
}

export default UserTodos