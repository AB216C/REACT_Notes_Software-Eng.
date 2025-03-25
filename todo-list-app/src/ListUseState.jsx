const NewListState = () => {
  const [users,setUsers] = useState(["Alice", "Bob", "Charlie", "John"])

  return (
    <ul>
      {users.map((user,index)=>{
        <li key={index} >{user} </li>
      })}
    </ul>
    )
}


export default NewListState

