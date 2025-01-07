import React from 'react';
import Slider from 'react-slick';

export default function ImageCarousel({ games }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4, // Ajusta el número de tarjetas visibles
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Ajusta el número de tarjetas para pantallas medianas
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2, // Ajusta el número de tarjetas para pantallas pequeñas
        },
      },
    ],
  };

  return (
    <div className="w-full mx-auto my-4 max-w-5xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-2 rounded-md shadow-sm">
      <h2 className="text-xl md:text-2xl font-extrabold text-center text-orange-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-3 p-1 rounded-md text-white shadow-md">
        ¡Últimos Ingresos!
      </h2>
      <Slider {...settings}>
        {games.map((game) => (
          <div key={game.juego_id} className="p-2">
            <div className="bg-white rounded-md shadow-sm overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <img
                src={game.juego_imgs}
                alt={game.juego_nombre}
                className="w-full h-32 object-contain bg-gray-100" // Reducir la altura de las imágenes
              />
              <div className="p-2">
                <h3 className="text-sm font-semibold text-gray-800 text-center">
                  {game.juego_nombre}
                </h3>
                <p className="text-center text-gray-600 mt-1">
                  {game.juego_trans === 'venta' ? (
                    <span className="text-green-600 font-bold">Precio: ${game.juego_precio}</span>
                  ) : (
                    <span className="text-blue-600 font-bold">Disponible para Canje</span>
                  )}
                </p>
                <button className="mt-2 w-full bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition">
                  Contactar
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

