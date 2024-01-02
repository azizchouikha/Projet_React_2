// Dans PokemonDetails.js
import React from 'react';
import './PokemonDetails.css';

const PokemonDetails = ({ data, onBackClick }) => {
    const { hp, atk, def, vit, spe_atk, spe_def } = data.stats;
    return (
        <div className="pokemon-details">
            
            <h2>{data.name.en} (#{data.id})</h2>
            <img src={data.image} alt={data.name.en} />
            <img src={data.image_shiny} alt={`Shiny ${data.name.en}`} style={{ display: "none" }} /> {/* Pour l'alterner, voir note ci-dessous */}
            <p>Génération: {data.generation}</p>
            <p>Type(s): {data.types.join(', ')}</p>
            <p>Taille: {data.height} m</p>
            <p>Poids: {data.weight} kg</p>
            <div className="pokemon-stats">
                <h3>Statistiques :</h3>
                <p>HP: {hp}</p>
                <p>Attaque: {atk}</p>
                <p>Défense: {def}</p>
                <p>Vitesse: {vit}</p>
                <p>Attaque Spéciale: {spe_atk}</p>
                <p>Défense Spéciale: {spe_def}</p>
            </div>
           
            <button onClick={onBackClick}>Retour à la liste</button>
        </div>
    );
};

export default PokemonDetails;