import React from 'react';
import './PokemonCard.css'; 

const PokemonCard = ({ data }) => {
  return (
    <div className="pokemon-card">
      <div className="pokemon-number">{data.id}</div>
      <div className="pokemon-name">{data.name.fr}</div> 
      <img src={data.image} alt={data.name.fr} className="pokemon-image" />
      <div className="pokemon-info-container">
        <div className="pokemon-generation">Génération: {data.generation}</div>
        <div className="pokemon-types">Type(s): {data.types.join(', ')}</div> 
      </div>
    </div>
  );
};

export default PokemonCard;
