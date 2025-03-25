
import Counting from './accounting'
import './App.css'
import Salutation from './defaultProp'
import Welcome from './prop'

function App() {

  return (

    <div>
      <h>Please be here now</h>
      <h1>Please come back home</h1>
      <Counting/>
      <Welcome name="John" />
      <hr/>
      <Salutation/>
    </div>

  )
}

export default App
