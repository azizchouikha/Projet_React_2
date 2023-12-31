import React from 'react';
import './Header.css';
import logo from '../International_Pokémon_logo.svg.png';

const Header = ({ onSearchChange }) => {
  return (
    <header className="header">
      <img src={logo} alt="Pokémon Logo" className="header-logo" />
      <div className="search-container">
      <input 
          type="text" 
          className="search-input" 
          placeholder="Rechercher un Pokémon..." 
          onChange={onSearchChange} 
        />
      </div>
    </header>
  );
};

export default Header;