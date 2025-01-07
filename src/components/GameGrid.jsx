import React from 'react';

export default function GameGrid({ games }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {games.map(game => (
        <div key={game.juego_id} className="border p-4 rounded flex flex-col items-center">
          <div className="mb-4 w-full h-64 flex items-center justify-center">
            <img src={game.juego_imgs} alt={game.juego_nombre} className="rounded w-full h-full object-contain" />
          </div>
          <h3 className="text-xl font-bold text-center">{game.juego_nombre}</h3>
          <p className="text-center">{game.juego_trans === 'venta' ? `Precio: $${game.juego_precio}` : 'Para Canje'}</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            Contactar
          </button>
        </div>
      ))}
    </div>
  );
}
