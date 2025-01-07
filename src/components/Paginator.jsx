import React from 'react';

export default function Paginator({ totalGames, gamesPerPage, currentPage, setCurrentPage }) {
  const totalPages = Math.ceil(totalGames / gamesPerPage);

  return (
    <div className="flex justify-center mt-4">
      <button 
        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
        className="px-4 py-2 mx-1 border rounded"
      >
        Anterior
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button 
          key={index} 
          onClick={() => setCurrentPage(index + 1)} 
          className={`px-4 py-2 mx-1 border rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : ''}`}
        >
          {index + 1}
        </button>
      ))}
      <button 
        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
        className="px-4 py-2 mx-1 border rounded"
      >
        Siguiente
      </button>
    </div>
  );
}
