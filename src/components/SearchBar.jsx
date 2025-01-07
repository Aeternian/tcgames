import React from 'react';

export default function SearchBar({ setFilteredGames, games }) {
  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    const filtered = games.filter(game => game.juego_nombre.toLowerCase().includes(searchQuery));
    setFilteredGames(filtered);
  };

  return (
    <input 
      type="text"
      placeholder="Buscar juego"
      className="w-full p-2 border rounded mb-4"
      onChange={handleSearch}
    />
  );
}
