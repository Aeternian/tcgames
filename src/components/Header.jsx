import React from 'react';
import TLogo from '../images/TLogo.jpg'; 
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  function pathMatchRoute(route) {
    return route === location.pathname;
  }

  return (
    <div className="bg-custom-vio border-b shadow-sm sticky top-0 z-50 h-16"> 
      {/* Added h-16 for increased height */}
      <header className="flex justify-between items-center px-3 mx-auto h-full"> 
        {/* Added h-full to make header items fill the height */}
        <div>
          <img 
            src={TLogo} 
            alt="Logo de TC" 
            className="h-10 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-lg font-semibold 
                ${pathMatchRoute("/") ? "text-black border-b-4 border-red-500" : "text-yellow-400 border-b-transparent"}`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-lg font-semibold 
                ${pathMatchRoute("/juegos") ? "text-black border-b-4 border-red-500" : "text-yellow-400 border-b-transparent"}`}
              onClick={() => navigate("/juegos")}
            >
              Juegos
            </li>
            <li
              className={`cursor-pointer py-3 text-lg font-semibold 
                ${pathMatchRoute("/sign-in") ? "text-black border-b-4 border-red-500" : "text-yellow-400 border-b-transparent"}`}
              onClick={() => navigate("/sign-in")}
            >
              Ingresar
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}