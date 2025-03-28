// Allows you to control what get rendered in your application based on certain  conditions 
// such as (show, hid or change component)

function UserGreeting(props) {
  if (props.isLoggedIn){
    return <h2>Welcome {props.username} </h2>
  } else {
    return <h2>Please Log in to continue</h2>
  }

}

export default UserGreeting







