

import { useState } from 'react';

function PokemonDetailEvents() {
    const [inputValue, setInputValue] = useState('');
    const [eventStatus, setEventStatus] = useState('Pokemon Finder');
    const [pokemon, setPokemon] = useState();
    const [pokemonError, setPokemonError] = useState('');
    const [errorStatus, setErrorStatus] = useState('');


    /*
    State Variables
inputValue  will be used to capture the value the user types into the text box we will make later
eventStatus will be used to visually show when an event has taken place
pokemon  will be used to store the Pokémon data we get back from pokeAPI
pokemonError  will be used to display an error message if the user types in something that isn't a Pokémon
errorStatus  will be used to display an error message if an image isn't able to be loaded

    */

     // Event handler for button click
     const handleClick = () => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
          .then(response => response.json())
          .then(data => setPokemon(data))
          .then(setPokemonError("")) // reset pokemon error message
          .catch(() => setPokemonError(`${inputValue} is not a valid Pokemon`));
  };

  // Event handler for input change
  const handleChange = (event) => {
      setInputValue(event.target.value);
  };

  // Event handlers for mouse events
  const handleMouseOver = () => {
      setEventStatus('Mouse has entered the button, you can click it now!');
  };

  const handleMouseOut = () => {
      setEventStatus('The mouse has left the button, clicking is not possible ):');
  };

  // Event handlers for keyboard events
  const handleKeyDown = (event) => {
      setEventStatus(`Key down: ${event.key}`);
  };

  const handleKeyUp = (event) => {
      setEventStatus(`Key up: ${event.key}`);
  };

  // Event handlers for focus events
  const handleFocus = () => {
      setEventStatus('Input field is focused, type a Pokemon name!');
  };

  const handleBlur = () => {
      setEventStatus('Input field lost focus, there will be no searching...');
  };

  // Event handlers for image load events
  const handleLoad = () => {
      setEventStatus('Image loaded successfully!');
  };

  const handleError = () => {
      setErrorStatus('Error loading image');
  };		 


  /*
  Event Functions:
These functions will run when events happen in the browser window

handleClick - will run when the user clicks an element on the page.  
This will be applied to a button that will be created later.  
It will then take the value the user has entered into the text box, that's stored in inputValue and call pokeAPI with it using fetch and .then 
Once the data is retrieved, it will set that Pokemon's data into the pokemon state variable.  
It will clear any previous fetch errors that may have been set in pokemonError 
If there's any errors thrown when trying to fetch the Pokémon it will use setPokemonError to put the message, `${inputValue} is not a valid Pokemon` inside of the pokemonError state variable.

handleChange - will run when the user changes the value of an element on the page.  
This will be applied to the input box we will create later.  In other words, when the user types a character into the text box, it will fire this event off.  
It receives event as a parameter which is the element on the page that had the event happen to it (the text box).  
Then it uses setInputValue to set the value of inputValue to event.target.value which is the value of the target of the change event (the text box).  
This is how we can capture the value the user typed into the text box. 

handleMouseOver - will run when the user positions the mouse cursor over an element on the page.  
We will apply this to a button we will create later.  
It will then run setEventStatus which will update the value of eventStatus displaying a message on the page notifying us that the event happened.

handleMouseOut - will run when the user positions the mouse cursor off of an element on the page.  
We will apply this to the button we will create later.  
It will then run setEventStatus which will update the value of eventStatus displaying a message on the page notifying us that the event happened.

handleKeyDown - will run when the user pushes a key on the keyboard all the way down.  
This will then run setEventStatus updating the value of eventStatus to event.key which is value of the key that was pressed down.

handleKeyUp - will run when a key on the keyboard is currently down and is released.  
This will then run setEventStatus updating the value of eventStatus to event.key which is value of the key that was released.

handleFocus - will run when an element on the page is clicked on or selected.  
In this case, it will be when the input box is clicked on so we can begin typing.  
When that event happens, it will run setEventStatus which will update the value of eventStatus displaying a message on the page.

handleBlur - will run when an element that was previously selected (focus) is clicked off of or deselected (loses focus).  
In this case, it will be when the input box is currently selected and something else is clicked on deselecting it.  
When that event happens, it will run setEventStatus which will update the value of eventStatus displaying a message on the page.

handleLoad - will run when a media element is loaded onto the page.  
In this case, it will be when an image loaded successfully.  
When the event fires off, it will run setEventStatus which will update the value of eventStatus displaying a message on the page.

handleError - will run when a media element cannot be loaded onto the page.  
In this case, it will be when an image loaded unsuccessfully.  
When that event fires off, it will run setEventStatus which will update the value of eventStatus displaying a message on the page.
  */

  return (
    <div>
        <h2>Event Handling in React</h2>
        <form>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                onKeyUp={handleKeyUp}
                placeholder="Type a Pokemon Name..."
            />

            <button
                type="button"
                onClick={handleClick}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                Load Pokemon
            </button>

        </form>



        {pokemon && (
		                <div>
		                    <p style={{ textTransform: 'capitalize' }}><b>{pokemon.name}</b></p>
		                    <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
		                </div>
						  )}

            	{pokemonError && <p style={{ color: 'red' }}>{pokemonError}</p>}      

            	<p>{eventStatus}</p>

	            <img
	                src="notValidImage.jpg"
	                alt="Not valid Image"
	                onLoad={handleLoad}
	                onError={handleError}
	            />

{errorStatus && <p style={{ color: 'red' }}>{errorStatus}</p>}


    </div>
);


/*
Explanation:
Header and Div:
We start out the returned jsx with a containing div and a header

Input Element in the Form:
The text box element in the form has multiple attributes with interesting values.  Let's go over them one by one

type="text" - defines the input as a text box that can be typed in

value={inputValue} - sets the value of the text box equal to whatever the inputValue state variable's value is.

onChange={handleChange} - the onChange attribute creates the event listener for the change event.  
When the value of the textbox changes, the handleChange function (discussed above) is called.  
This is how we capture the value the user enters, character by character.

onFocus={handleFocus} - the onFocus attribute creates the event listener for the focus event.  
When the textbox is clicked on or selected, the handleFocus function (discussed above) is called
The eventStatus state variable is updated, and the message is displayed. 

onBlur={handleBlur} - the onBlur attribute creates the event listener for the blur event.  
When the textbox is clicked out of, or deselected, the handleBlur function (discussed above) is called
The eventStatus state variable is updated, and the message is displayed. 

onKeyDown={handleKeyDown} - the onKeyDown attribute creates the event listener for the keydown event.  
When a key on the keyboard is pressed all the way down, the handleKeyDown function (discussed above) is called
The eventStatus state variable is updated, and the message containing the key that was pressed down is displayed. 

onKeyUp={handleKeyUp} - the onKeyUp attribute creates the event listener for the keyup event.  
When a key on the keyboard is pressed down and then released, the handleKeyUp function (discussed above) is called
The eventStatus state variable is updated, and the message containing the key that was released is displayed. 

placeholder="Type a Pokemon Name..." - defines what message will go into the textbox when nothing has been entered into it.
  This is mainly used to give directions to the user.

Button Element in the Form:
The button element in the form has multiple attributes as well.  Let's go over them one by one

type="button" - defines the type of button we are using, which is a normal clickable button.  
Always specify the type attribute for your buttons since different browsers may use different default button types.  

onClick={handleClick} - the onClick attribute creates the event listener for the click event.  
When the button is clicked, the handleClick function (discussed above) is called.  
This is how we can make the API call after the button has been clicked.

onMouseOver={handleMouseOver} - the onMouseOver attribute creates the event listener for the mouseover event.  
When the cursor moves over the button, the handleMouseOver function (discussed above) is called
The eventStatus state variable is updated, and the message is displayed. 

onMouseOut={handleMouseOut} - the onMouseOut attribute creates the event listener for the mouseout event.  
When the cursor is currently over the button and then moves off of it, the handleMouseOut function (discussed above) is called,
The eventStatus state variable is updated, and the message is displayed. 

Now go back to the code we just entered, and look inside the div that we are conditionally rendering.  
We are using the pokemon state variable inside of the div to display the name and image of the Pokémon. 
The Pokémon data comes back as an object so we are using pokemon.name to display the Pokémon's name. 
We are using the CSS property/value textTransform: 'capitalize' to capitalize the first letter of the Pokémon's name
We then use the API to display an image of the retrieved Pokémon.  There are many images of each Pokémon in pokeAPI.  The location of the image in the API object that we chose to display is: pokemon.sprites.other.home.front_default
Remember, the div with the Pokémon's information will only show if we actually retrieve a Pokémon from the API and successfully set it to the pokemon state variable

Conditional Rendering the Pokémon Error

Take a look at this code: {pokemonError && .... 
This is the same concept as above.  If there's a value in the pokemonError state variable, it will display the message in a red color.  
Remember:  pokemonError is set in the handleClick function if a Pokémon can't be retrieved using the user's input

The eventStatus state variable

Take a look at this code: <p>{eventStatus}</p> - this is the state variable that we update many times throughout our project.
Because we put this state variable on the page, whenever the value of it changes, React will re-render the component and display the new, updated value on the page.

The Image using onLoad and onError 

This image, like the button and text box, has some attributes.  Lets go over them

src="notValidImage.jpg" - defines where the image is located
To demonstrate how onError works we put in a fake image location forcing it to error out

alt="Not Valid Image" - this is a text description of the image. 

onLoad={handleLoad} - the onLoad attribute creates the event listener for the external resource load event.  
When the browser tries to load the image and is successful, the handleLoad function (discussed above) is called.  
This will display the "Image loaded successfully!" message

onError={handleError} - the onError attribute creates the event listener for the external resource load error event.  
When the browser tries to load the image and is unsuccessful, the handleError function (discussed above) is called.  
This will display the "Error loading image" message

Conditional Rendering errorStatus

Take a look at this code: {errorStatus && .... 
This is the same concept as we've already discussed.  If there's a value in the errorStatus state variable, it will display the message in a red color.  
Remember:  errorStatus is set in the handleError function if an external resource can't be successfully loaded

*/
    
}

export default PokemonDetailEvents;