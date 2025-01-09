import React, { useState, useEffect } from 'react';

export default function SearchBar({ setFilteredGames, games }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [...new Set(games.map((game) => game.juego_cat))]; // Obtiene categorías únicas

  useEffect(() => {
    const filtered = games.filter((game) => {
      const matchesName = game.juego_nombre.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory ? game.juego_cat === selectedCategory : true;
      return matchesName && matchesCategory;
    });
    setFilteredGames(filtered);
  }, [searchQuery, selectedCategory, games, setFilteredGames]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row gap-5 text-center items-center mb-6 mt-6 bg-gradient-to-r from-amber-400 via-orange-800 to-amber-400 p-6 rounded-2xl shadow-lg max-w-3xl mx-auto">
    {/* Barra de búsqueda */}
    <input
      type="text"
      placeholder="🔍 Buscar por nombre..."
      className="flex-grow w-full md:w-auto p-3 border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
      value={searchQuery}
      onChange={handleInputChange}
    />
    {/* Filtro por categoría */}
    <select
      className="flex-grow w-full md:w-auto p-3 border border-gray-300 rounded-full shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
      value={selectedCategory}
      onChange={handleCategoryChange}
    >
      <option value="">Todas las categorías</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  </div>
  

  );
}
