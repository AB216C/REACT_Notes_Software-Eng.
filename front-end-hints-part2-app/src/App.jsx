// import { useState } from 'react'

import "./App.css"
import CharacterTwo from "./components/CharacterTwo"
import DogDisplay from "./components/DogDisplayUseEffect"

      //By passing a name in the following rendered Characters, we can display efficiently different characters. 
      //But props and useState will need to be used for that to happen.

function App() {

  return (

    <div>
      <DogDisplay/>
      <CharacterTwo name="John" type="Typemaster" />
      <CharacterTwo name="Eve" type="Mage" />
      <CharacterTwo name="Jackes" type="Hunter" />


    </div>
  )
}

export default App
