import './App.css';
import { useState, useEffect } from "react";
import "./styles.css";
import {Pokemon} from './components/Pokemon';

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
      <footer className="bg-success text-center py-4 shadow-sm mt-5">
        <p className="small text-dark m-0">Copyright &copy; 2022 Rodcel Isaac Macalinao</p>
      </footer>
    </>
  );
}

export default App;
