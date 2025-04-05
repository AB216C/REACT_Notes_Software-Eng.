// src/components/PokemonList.jsx
import { useState, useEffect } from 'react';

function PokemonList() {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    // useEffect to handle component mounting
    useEffect(() => {

        const fetchPokemonData = async () => {
        
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=6');

                if (!response.ok) {
                    throw new Error('Pokemon fetch did not work');
                }

                const pokemonData = await response.json();

                // when the state is changed, this is where the updating phase happens. 
                setPokemon(pokemonData.results); // .results is where the array of pokemon exists
                
                // this will unmount the "Loading Pokemon..." message
                setLoading(false); 
        }

        fetchPokemonData();        

    }, []); // Empty dependency array ensures this runs once after the component is mounted

    // when loading is no longer true, this message will unmount and no longer display
    if (loading) {
        return <div>Loading Pokemon...</div>;
    }

    return (
        <div>
            <h1>List of Pokemon</h1>
            <ul>
                {pokemon.map(poke => (
                    <li key={poke.name}>
                        <p>{poke.name}</p>
                        <img src={`https://img.pokemondb.net/artwork/${poke.name}.jpg`} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PokemonList;


/*
Explanation:
State Initialization:
pokemon: Stores the fetched data.
loading: A boolean flag indicating whether the data is still being fetched.

useEffect Hook:
The useEffect hook is triggered once when the component is mounted (because of the empty dependency array []).
Inside useEffect, we define an async function (fetchPokemonData) to fetch the data using the fetch() API with await for asynchronous code.

Error Handling:
If response.ok is true, in other words, everything worked, then it will continue, if not it will throw the error

Conditional Rendering:
While the data is still loading (loading is true), a "Loading Pokemon..." message is displayed.
Once the data is successfully fetched, the component renders the data by mapping through the Pokémon and 
showing their names and images from another API (pokemondb.net). 
We use this other API because pokeAPI doesn't give us a useable way to get the images when fetching multiple Pokémon.


Explanation:
Imports useState  PokemonList and App.css

Creates a state variable, showPokemonList that will control whether the list of Pokémon will show or not and it's set to false.

The button has an onClick event listener, so when it is clicked, it will set the showPokemonList state variable to the opposite value of what it currently was.  The text on the button will show "Hide Pokemon List" when showPokemonList is true and will display "Show Pokemon List" when it's false.

When showPokemonList is true, it will then mount/show the PokemonList component.  If it's false it will hide/unmount it.

How useState and useEffect Fit into the Component's Lifecycle in this Project
Mounting:
useState initializes state with a default value on the first render.
The state setter (e.g., setPokemon) is available for updating the state.
useEffect runs when the component mounts if you pass an empty array [] as the dependency

Updating:
When the state of any of the state variables is updated using the state setter (e.g., setPokemon  setLoading showPokemonList) the component re-renders with the new state.
If you pass dependencies (like [pokemon]), useEffect would run every time one of those dependencies changes.  We did not do this in this example however because it was not needed.

Unmounting:
When the component unmounts, the state created with useState is discarded.
In App.jsx we have a button that will either show or hide the list of Pokémon depending on what the value of showPokemonList is.  When it's true, the PokemonList component is mounted.  When it's false the PokemonList component is unmounted.

*/




