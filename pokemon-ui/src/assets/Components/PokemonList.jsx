
import {useState, useEffect} from 'react'

function MypokemonList() {

  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{

    const fetchPokemonData= async() => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=5')

      if(!response.ok) {
        throw new Error('Pokemon fetch did not work')
      }

      const pokemonData = await response.json();

      setPokemon(pokemonData.results);

      setLoading(false)
    }

    fetchPokemonData();

  },[])

  return (
    <div>
      <h1>This is Pokemon List</h1>

      <ul>
        {pokemon.map(poke=>(

          <li>
            <p key={poke.name} >{poke.name}</p>
            <img src={`https://img.pokemondb.net/artwork/${poke.name}.jpg`} />

          </li>
        ) )}
      </ul>
    </div>
  )
}

export default MypokemonList