import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import wood from '../images/wood.jpg'; 
import { doc, getDoc } from 'firebase/firestore';

export default function JuegoInfo() {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      const docRef = doc(db, 'juegos', id); // Referencia al documento del juego en Firestore
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setGame({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log('No such document!');
      }
    };

    fetchGame();
  }, [id]);

  if (!game) {
    return <div>Cargando...</div>;
  }

  return (
<div className="flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${wood})` }}>
  <div className="max-w-6xl mx-auto p-8 bg-gradient-to-br from-gray-50 to-gray-400 rounded-lg shadow-2xl">
    <div className="flex flex-col md:flex-row items-center gap-12">
      {/* Imagen del juego */}
      <div className="relative group">
        <img
          src={game.juego_imgs}
          alt={game.juego_nombre}
          className="w-80 h-80 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 rounded-lg group-hover:bg-opacity-25 transition-all"></div>
      </div>

      {/* Información del juego */}
      <div className="flex-1">
        {/* Título */}
        <h2 className="text-5xl text-center font-extrabold text-gray-800 mb-4">
          {game.juego_nombre}
        </h2>
        {/* Descripción */}
        <p className="text-gray-700 text-xl leading-relaxed text-center md:text-center">
          {game.juego_desc}
        </p>

      {/* Detalles */}
<div className="flex flex-wrap justify-center md:justify-center gap-4 mt-6">
  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-base font-medium">
    🎲 Categoría: {game.juego_cat}
  </span>
  <span className="bg-lime-100 text-pink-800 px-4 py-2 rounded-full text-base font-medium">
    👥 Jugadores: {game.juego_NJug}
  </span>
  <span
    className={`px-4 py-2 rounded-full text-base font-medium ${
      game.juego_cons === 'Excelente' || game.juego_cons === 'Muy bueno'
        ? 'bg-green-100 text-green-800'
        : game.juego_cons === 'Bueno'
        ? 'bg-yellow-100 text-yellow-800'
        : 'bg-amber-200 text-amber-800'
    }`}
  >
    📦 Estado: {game.juego_cons}
  </span>
  <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-base font-medium">
    🌐 Idioma: {game.juego_idioma}
  </span>
</div>


        {/* Precio o disponibilidad */}
        <p className="mt-8 text-gray-900 text-2xl font-semibold text-center md:text-center">
          {game.juego_trans === 'venta' ? (
            <>
              Precio: <span className="text-green-600">${game.juego_precio}</span>
            </>
          ) : (
            'Disponible para canje'
          )}
        </p>

        {/* Botón de acción */}
        <div className="flex justify-center md:justify-center">
          <button className="mt-8 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
            {game.juego_trans === 'venta' ? 'Contactar' : 'Contactar'}
          </button>
        </div>
      </div>
    </div>
  </div>
</div>


  );
}
