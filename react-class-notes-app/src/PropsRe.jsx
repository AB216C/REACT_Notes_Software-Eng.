//Prop are used to pass information from one component to another
function PropGreeting(props) {
  return <h1>Hello, {props.name} </h1>

}


function PropApp() {
  return (
    <div>
      <PropGreeting name="Bob"/>
      <PropGreeting name="Alice"/>
    </div>
  )
}


export default PropApp