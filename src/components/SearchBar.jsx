import React, { useState, useEffect } from 'react';
import { Slider, Box } from '@mui/material';

export default function SearchBar({ setFilteredGames, games }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTransaction, setSelectedTransaction] = useState('');
  const [priceRange, setPriceRange] = useState([0, 10000]); // Rango inicial de precios

  const [categories, setCategories] = useState([]);
  const [transactionTypes, setTransactionTypes] = useState([]);

  // Extraer categorías y tipos de transacción dinámicamente
  useEffect(() => {
    const uniqueCategories = [...new Set(games.map((game) => game.juego_cat))];
    const uniqueTransactions = [...new Set(games.map((game) => game.juego_trans))];
    setCategories(uniqueCategories);
    setTransactionTypes(uniqueTransactions);
  }, [games]);

  // Filtrado dinámico
  useEffect(() => {
    const filtered = games.filter((game) => {
      const matchesName = game.juego_nombre.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory ? game.juego_cat === selectedCategory : true;
      const matchesTransaction = selectedTransaction ? game.juego_trans === selectedTransaction : true;
      const matchesPrice = game.juego_precio >= priceRange[0] && game.juego_precio <= priceRange[1];

      return matchesName && matchesCategory && matchesTransaction && matchesPrice;
    });

    setFilteredGames(filtered);
  }, [searchQuery, selectedCategory, selectedTransaction, priceRange, games, setFilteredGames]);

  const handleInputChange = (e) => setSearchQuery(e.target.value);
  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  const handleTransactionChange = (e) => setSelectedTransaction(e.target.value);
  const handleSliderChange = (e, newValue) => setPriceRange(newValue);

  return (
    <div className="flex flex-col gap-4 items-center mb-8">
      {/* Filtros principales en una sola fila */}
      <div className="flex flex-wrap gap-4 justify-between items-center bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-400 p-4 rounded-lg shadow-lg w-full max-w-5xl">
        {/* Barra de búsqueda */}
        <input
          type="text"
          placeholder="🔍 Buscar por nombre..."
          className="flex-1 min-w-[150px] p-2 border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          value={searchQuery}
          onChange={handleInputChange}
        />
        {/* Filtro por categoría */}
        <select
          className="flex-1 min-w-[150px] p-2 border border-gray-300 rounded-full shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">Categorías</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {/* Filtro por tipo de transacción */}
        <select
          className="flex-1 min-w-[150px] p-2 border border-gray-300 rounded-full shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          value={selectedTransaction}
          onChange={handleTransactionChange}
        >
          <option value="">Todos los tipos</option>
          {transactionTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {/* Slider para rango de precios */}
        <div className="flex flex-col flex-1 min-w-[250px] items-center">
          <h3>Filtrar por precio</h3>
          <Box width="100%">
            <Slider
              value={priceRange}
              onChange={handleSliderChange}
              valueLabelDisplay="auto"
              min={0}
              max={10000}
              step={10}
              sx={{
                color: '#f59e0b',
                '& .MuiSlider-thumb': {
                  backgroundColor: '#f97316',
                  '&:hover': { boxShadow: '0px 0px 0px 8px rgba(249, 115, 22, 0.16)' },
                },
              }}
            />
          </Box>
          <div className="flex justify-between w-full mt-1 text-sm">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
