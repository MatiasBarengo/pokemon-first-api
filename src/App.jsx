import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [pokemon, setPokemon] = useState({})

  const [index, setIndex] = useState(Math.floor(Math.random() * 600) +1);

  const [isDecimeters, setIsDecimeters] = useState(true)

  const [isHectograms, setIsHectograms] = useState(true)

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${index}/`)
      .then((res) => setPokemon(res.data))
  }, []);

  console.log(pokemon);

  const changePokemon = () => {
    const index = Math.floor(Math.random() * 600) +1;
    axios.get(`https://pokeapi.co/api/v2/pokemon/${index}/`)
      .then((res) => setPokemon(res.data))
    
  }

  return (
    <div className="App">
      <h1 className="name">{pokemon.name}</h1>
      <img src={pokemon.sprites?.other.dream_world.front_default} alt="pokemon img" />
      <div className="info">
        <p><b>Weight:</b> {' '} {isHectograms ? pokemon.weight : (pokemon.weight / 10)} {' '} {isHectograms ? "hectograms" : "kilograms"}</p>
        <p>
          <b>Height:</b> {' '}
          {isDecimeters ? pokemon.height : (pokemon.height / 10)} {' '}
          {isDecimeters ? "decimeters" : "meters"}</p>
        <p><b>Type:</b> {pokemon.types?.[0].type.name} {pokemon.types?.[1]?.type.name}</p>
      </div>
      <div className="buttons">
        <button onClick={() => setIsDecimeters(!isDecimeters)}>Change weight</button>
        <button onClick={() => setIsHectograms(!isHectograms)}>Change height</button>
      </div>
      <button onClick={changePokemon}>Change pokemon</button>


    </div>
  )
}

export default App
