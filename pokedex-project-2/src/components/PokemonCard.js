import React from 'react';
import './PokemonCard.css'; 

const PokemonCard = ({ data }) => {
  return (
    <div className="pokemon-card">
      <div className="pokemon-number">{data.id}</div>
      <div className="pokemon-name">{data.name.en}</div> {/* Utiliser la version anglaise du nom */}
      <img src={data.image} alt={data.name.en} className="pokemon-image" />
      <div className="pokemon-info-container">
        <div className="pokemon-generation">Génération: {data.generation}</div>
        <div className="pokemon-types">Type(s): {data.types.join(', ')}</div> {/* À ajuster selon comment vous voulez afficher les types */}
      </div>
    </div>
  );
};

export default PokemonCard;
