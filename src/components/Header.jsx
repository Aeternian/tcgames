import React from 'react';
import TLogo from '../images/TLogo.jpg'; 
import { useLocation, useNavigate} from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate()

  function pathMathRoute(route) {
    return route === location.pathname; // Directly return the comparison result
  }

  return (
    <div className="bg-fuchsia-800 border-b shadow-sm sticky top-0 z-50">
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <div>
          <img src={TLogo} alt="Logo de TC" className='h-14 cursor-pointer'
          onClick={()=>navigate("/")}
          />
        </div>
        <div>
          <ul className='flex space-x-10'>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-yellow-400 border-b-[3px]
             border-b-transparent
              ${pathMathRoute("/") && "text-black border-b-red-500"}`}
              onClick={()=>navigate("/")}
              >Home</li>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-yellow-400 border-b-[3px]
             border-b-transparent
              ${pathMathRoute("/juegos") && "text-black border-b-red-500"}`}
              onClick={()=>navigate("/juegos")}
              >Juegos</li>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-yellow-400 border-b-[3px]
             border-b-transparent
              ${pathMathRoute("/sign-in") && "text-black border-b-red-500"}`}
              onClick={()=>navigate("/sign-in")}
              >Sign in</li>
          </ul>
        </div>
      </header>
    </div>
  );
}
