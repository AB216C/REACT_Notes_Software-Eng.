import {useState} from 'react'
// import {string} from 'prop-types'


function Salutation(props) {
  const [name,setName] = useState(props.InitialName)

  const ChangeName = () => {
    setName("Jean Lusson")
  }


  return (
    <div>
      <p>Welcome, {name} to the New World </p>
      <button onClick={ChangeName} >Change Name</button>
    </div>
  )

}

// Salutation.propTypes = {
//   InitialName : string
// }


Salutation.defaultProps = {
  InitialName : "Claudio"
}


export default Salutation 






