import React from 'react';
import TCLogoAm from '../images/TCLogoAm.jpg'; // Asegúrate de que la ruta sea correcta
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-black text-white py-12">
      <div className="container mx-auto px-6">
        {/* Contenido principal */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Logo y Descripción con Imagen */}
          <div className="flex items-center text-center md:text-left mb-6 md:mb-0">
            <img 
              src={TCLogoAm} 
              alt="TrocaGames Logo" 
              className="w-80 h-auto object-contain mr-4" // Ajustamos tamaño y margen
            />
            <div>
              <h1 className="text-4xl font-bold text-center">TrocaGames</h1>
              <p className="mt-2 mb-4 text-gray-400 text-center">Intercambio y venta de juegos de mesa</p>
              <p className="text-sm text-gray-500">&copy; 2025 TrocaGames. Todos los derechos reservados.</p>
            </div>
          </div>

          {/* Navegación */}
          <nav className="mb-6 md:mb-0">
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
              <li><a href="/About" className="hover:text-yellow-400 transition duration-300">Acerca de</a></li>
              <li><a href="/contact" className="hover:text-yellow-400 transition duration-300">Contacto</a></li>
              <li><a href="/Terminos" className="hover:text-yellow-400 transition duration-300">Términos y condiciones</a></li>
            </ul>
          </nav>

          {/* Redes Sociales */}
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:bg-yellow-400 p-2 rounded-full transition duration-300">
              <FaFacebookF size="1.5em" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:bg-yellow-400 p-2 rounded-full transition duration-300">
              <FaTwitter size="1.5em" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:bg-yellow-400 p-2 rounded-full transition duration-300">
              <FaInstagram size="1.5em" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:bg-yellow-400 p-2 rounded-full transition duration-300">
              <FaGithub size="1.5em" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
