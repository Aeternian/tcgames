import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link

export default function GameGrid({ games }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {games.map(game => (
        <div key={game.id} className="border p-4 rounded flex flex-col items-center">
          <Link to={`/juegoinfo/${game.id}`}> {/* Enlace al detalle del juego */}
            <div className="mb-4 w-full h-64 flex items-center justify-center">
              <img src={game.juego_imgs} alt={game.juego_nombre} className="rounded w-full h-full object-contain" />
            </div>
            <h3 className="text-xl font-bold text-center">{game.juego_nombre}</h3>
            <p className="text-center">{game.juego_trans === 'venta' ? (
                    <span className="text-green-600 font-bold">Precio: ${game.juego_precio}</span>
                  ) : (
                    <span className="text-blue-600 font-bold">Disponible para Canje</span>
                  )}</p>
          </Link>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            Contactar
          </button>
        </div>
      ))}
    </div>
  );
}
