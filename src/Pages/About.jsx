import React from 'react';
import fabout from '../images/fondoabout.jpg'; 
import Footer from '../components/Footer'; 

export default function About() {
  // Agregar los estilos directamente en el div con style
  return (
    <div className="flex flex-col min-h-screen p-0" style={{ backgroundImage: `url(${fabout})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
      {/* Contenido principal */}
      <div className="flex-grow flex flex-col justify-center items-center p-8">
        <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-gray-50 to-gray-300 rounded-lg shadow-2xl">
          {/* Banner */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-extrabold text-gray-900">Acerca de Nosotros</h1>
          </div>
          
          {/* Información */}
          <div className="text-gray-700 text-lg leading-relaxed">
            <p className="mb-4">
            ¡Dale que va! ¿Sos un fanático de los dados y los tableros? ¡Este es tu lugar! En TrocaGames podés publicar tus juegos de mesa usados y encontrar esos títulos que te faltan para completar tu colección.
            </p>
            <p className="mb-4">
            Es como un trueque gigante, pero sin la molestia de ir a la feria de usados. Subís tus juegos, te contactás con otros jugadores y ¡listo! ¡A disfrutar de una nueva partida!            
            </p>
            <p className="mb-4">
            Además, si lo que querés es vender el juego en vez de cambiarlo, también vas a tener la posibilidad de hacerlo!
            </p>
            <p className="mb-4">
              Es importante mencionar que nuestra plataforma actúa únicamente como un intermediario y no se responsabiliza por las transacciones realizadas entre los usuarios. 
            </p>
            <p className="mb-4">
              ¡Así que empieza a explorar y encuentra el próximo juego de mesa perfecto para ti!
            </p>
          </div>

          {/* Información de contacto */}
          <div className="flex flex-col items-center mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">¿Tienes una pregunta?</h2>
            <p className="text-gray-700 mb-4">
              Contáctanos a través de nuestro correo electrónico: <a href="mailto:trocagames@gmail.com" className="text-blue-600 hover:underline">trocagames@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
      {/* Footer */}
            <Footer />
    </div>
  );
}
