import React from 'react';
import './PokemonDetails.css';

const PokemonDetails = ({ data, onBackClick }) => {
    const { hp, atk, def, vit, spe_atk, spe_def } = data.stats;
    return (
        <div className="pokemon-details">
            <h2> {data.id}. {data.name.en} </h2>
            <img src={data.image} alt={data.name.en} />
            <div className="detail-group">
                <span>Génération: {data.generation}</span>
                <span>Type(s): {data.types.join(', ')}</span>
                <span>Taille: {data.height} m</span>
                <span>Poids: {data.weight} kg</span>
            </div>
            <div className="pokemon-stats">
                <h3>Statistiques :</h3>
                <table>
                    <tbody>
                        <tr><td>HP:</td><td>{hp}</td></tr>
                        <tr><td>Attaque:</td><td>{atk}</td></tr>
                        <tr><td>Défense:</td><td>{def}</td></tr>
                        <tr><td>Vitesse:</td><td>{vit}</td></tr>
                        <tr><td>Attaque Spéciale:</td><td>{spe_atk}</td></tr>
                        <tr><td>Défense Spéciale:</td><td>{spe_def}</td></tr>
                    </tbody>
                </table>
            </div>
            <button onClick={onBackClick} className="back-button">Retour à la liste</button>
        </div>
    );
};

export default PokemonDetails;