import React from 'react';
import TCLogoAm from '../images/TCLogoAm.jpg'; 
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  function pathMatchRoute(route) {
    return route === location.pathname;
  }

  return (
    <div className="bg-[#e4833e] bg-gradient-to-r from-[#d0d05c] to-[#81501c] border-b shadow-sm sticky top-0 z-50 h-20">
  <header className="flex justify-between items-center px-3 mx-auto h-full">
    {/* Added h-full to make header items fill the height */}
    <div className="flex items-center h-full">
      <img 
        src={TCLogoAm} 
        alt="Logo de TC" 
        className="h-[95%] w-auto cursor-pointer object-contain"
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