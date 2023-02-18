import './App.css';
import { useState, useEffect } from "react";
import "./styles.css";
import {Pokemon} from './components/Pokemon';
import {Footer} from './components/Footer';

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data.pokemon);
      });
  }, []);

  return (
    <>
      <h1 id="title">Pokemon Pokedex</h1>
      <div className='container'>
        {pokemonData.map((pokemonName, i) => (
          <div className='box' key={i}>
            <Pokemon pokemonName={pokemonName}/>
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
}

export default App;
