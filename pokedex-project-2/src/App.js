import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import PokemonCard from './components/PokemonCard';
import PokemonDetails from './components/PokemonDetails';

function App() {
  const [pokemons, setPokemons] = useState([]); // État pour stocker les données des Pokémon
  const [searchTerm, setSearchTerm] = useState(''); // Terme de recherche
  const [selectedPokemon, setSelectedPokemon] = useState(null); // État pour le Pokémon sélectionné
  useEffect(() => {
    // Fonction pour fetch les données de l'API
    const fetchPokemons = async () => {
      try {
        const response = await fetch('https://pokedex-api.3rgo.tech/api/pokemon'); // URL de l'API
        const data = await response.json(); // Convertir la réponse en JSON
        setPokemons(data.data); // Accéder à la propriété 'data' de la réponse
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchPokemons(); // Appeler la fonction lors du montage du composant
  }, []);
  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.en.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Gestion du changement de la barre de recherche
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handlePokemonSelect = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  // Gérer le retour à la liste
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
                {filteredPokemons.map((pokemon, index) => (
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
