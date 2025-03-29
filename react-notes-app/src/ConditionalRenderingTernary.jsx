//Using Ternary Method

/*
Using Ternary operator
Without Ternary

if (authenticated) {
  renderApp();
} else {
  renderLogin();
}

With Ternary:

authenticated ? renderApp() : renderLogin();

*/

// import PropTypes from 'prop-types'

function UserGreetingTernary(props) {
  const WelcomeMessage = <h1>Welcome {props.username} </h1>

  const LogingPrompt = <h2>Please log in to continue</h2>


  return (props.isLoggedIn ? WelcomeMessage : LogingPrompt)

}

//Adding proptypes

// UserGreetingTernary.proptypes = {
//   username: PropTypes.string,
//   isLoggedIn: PropTypes.bool
// }

// Adding default props
// UserGreetingTernary.defaultProps = {
//   isLoggedIn:false,
//   username: "Guest"
// }

export default UserGreetingTernary

