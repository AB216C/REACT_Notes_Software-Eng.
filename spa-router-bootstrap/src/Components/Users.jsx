
import { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';


const Users =()=> {

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

  if (loading) {
    return (
      <Container>
        <h3>
          <Spinner
            animation="border"
            variant="info"
            style={{ marginRight: '15px' }}
            role="status"
          />
          Loading Users...
        </h3>
      </Container>
    )
  }

  if (error) return <p>{error}</p>;


  return(
    <Container>
    <h3>User List</h3>
    <Row>
      {users.map(user => (
        <Col key={user.id} className="mt-4">
          <Card style={{ width: '18rem' }} >
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">👤 {user.username}</Card.Subtitle>
              <Card.Text className="mt-3">📞 {user.phone}</Card.Text>
              <Card.Link href={`mailto:${user.email}`} className="mb-3 d-block text-decoration-none" >
                ✉️ {user.email}
              </Card.Link>
              <Button href={`/user-todos/${user.id}`}>Todo List</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
  )
}

export default Users