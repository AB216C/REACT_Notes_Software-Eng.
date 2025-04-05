import {useState} from 'react'


function PokemonEvents() {

  const [inputValue, setInputValue] = useState('');
  const [eventStatus, setEventStatus] = useState('Pokemon Finder');
  const [pokemon, setPokemon] = useState();
  const [pokemonError, setPokemonError] = useState('');
  const [errorStatus,setErrorStatus] = useState('');


  //Event handler for button clicks


  const handleClick=()=> {
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
      .then(response=>response.json())
      .then(data => setPokemon(data))
      .then(setPokemonError)
      .catch(()=>setPokemonError(`${inputValue} is not a valid pokemon`));
  }

  //Event handler for input change

  const handleChange =(event)=> {
    setInputValue(event.target.value)

  }

  //Event handler for mouse Events


  const handleMouseOver=()=> {
    setEventStatus("Mouse has entered the button, you can click it now")

  }


  const handleMouseOut=()=> {
    setEventStatus("Mouse has left the button, clicking is not possible")
  }

  const handleKeyDown = (event)=> {
    setEventStatus(`Key down: ${event.key}`)
  }

  const handleKeyUp = (event) => {
    setEventStatus(`Key up: ${event.key}`)
  }


//Event Handlers for focus events

const handleFocus =() => {
  setEventStatus("Input field is focused, type a pokemon name")
  
}

const handleBlur =() => {
  setEventStatus("Input field lost focus, there will be no searching")
}

const handleLoad=()=> {
  setEventStatus("Image Loaded Successfully")
}

const handleError =()=> {
  setErrorStatus("Error loading Image")
}


//Adding forms, textbox, header, or buttons so we can make these events happen

return (
  <div>

    <h1>Event Handling in React</h1>

    <form>
      <input
      type="text"
      value = {inputValue}
      onChange = {handleChange}
      onFocus = {handleFocus}
      onBlur = {handleBlur}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      placeholder="Type a Pokemon Name..."
      />

      <button 
      type="button" 
      onClick={handleClick}
      onMouseOver = {handleMouseOver}
      onMouseOut = {handleMouseOut}
       >
        Load Pokemon
      </button>
    </form>


    {pokemon && (
        <div>
          <p style={{textTransform:'capitalize'}} ><b>{pokemon.name}</b></p>
          <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
        </div>

      )}


      {pokemonError&& <p style={{color:"red"}} >{pokemonError}</p>}


      <p>{eventStatus}</p>


      <img
      src = "notValidImage.jpg"
      alt = "Not Valid Image"
      onLoad = {handleLoad}
      onError = {handleError}
      />

      {errorStatus&& <p style={{color:"red"}} >{errorStatus}</p>}


  </div>
)

}

export default PokemonEvents;