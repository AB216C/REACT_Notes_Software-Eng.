import { useState } from 'react'

import PokemonList from './Components/PokemonList'

import './App.css'



function App() {
  const [showPokemonList, setShowPokemonList] = useState(false)

  return (

    <div>
      <h1>Welcome to Pokemon App</h1>

      <button onClick={()=>setShowPokemonList(!showPokemonList)}>
        {showPokemonList? 'Hide PokemonList': 'Show Pokemon List'}
      </button>

      {showPokemonList&&<PokemonList/>}

    </div>

  )
}

export default App
