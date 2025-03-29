//Adding Syles to our functions-INLINE STYLE

function Greeting() {

  const styleGreeting = {
    fontSize: "45px",
    fontWeight: "bolder",
    padding: "20px",
    color:"red",
    backgroundColor: "yellow"
  }
  return <h1 style={styleGreeting} >Welcome to the world of react</h1>   //styleGreeting: This is inline style
}

export default Greeting;