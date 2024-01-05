import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import PokemonCard from './components/PokemonCard';
import PokemonDetails from './components/PokemonDetails';

function App() {
  const [pokemons, setPokemons] = useState([]); 
  const [searchTerm, setSearchTerm] = useState(''); 
  const [selectedPokemon, setSelectedPokemon] = useState(null); 
  const [types, setTypes] = useState([]);  
  useEffect(() => {

    const fetchPokemons = async () => {
      try {
        const response = await fetch('https://pokedex-api.3rgo.tech/api/pokemon'); 
        const data = await response.json(); 
        setPokemons(data.data); 
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };
    const fetchTypes = async () => {
      try {
        const response = await fetch('https://pokedex-api.3rgo.tech/api/types');
        const data = await response.json();
        if (data.success) {
          setTypes(data.data); 
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des types:", error);
      }
    };

    fetchPokemons(); 
    fetchTypes();
  }, []);
  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.en.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
const getTypeNamesByIds = (typeIds) => {
  return typeIds.map(typeId => {
      const type = types.find(t => t.id === typeId);
      return type ? type.name.fr : "Inconnu";  
  });
};


const mappedPokemons = filteredPokemons.map(pokemon => ({
  ...pokemon,
  types: getTypeNamesByIds(pokemon.types)  
}));

  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handlePokemonSelect = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

 
  const handleBackClick = () => {
      setSelectedPokemon(null);
  };
  return (
    <div className="App">
        <Header onSearchChange={handleSearchChange} />
        {selectedPokemon ? (
            <PokemonDetails data={selectedPokemon} onBackClick={handleBackClick} />
        ) : (
            <div className="pokemon-cards-container">
                {mappedPokemons.map((pokemon, index) => (  
                    <div onClick={() => handlePokemonSelect(pokemon)} key={index}>
                        <PokemonCard data={pokemon} />
                    </div>
                ))}
            </div>
        )}
    </div>
  );
}

export default App;

