import React, { useState } from 'react'
import forgot from '../images/forgot.jpg'; 
import { Await, Link } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { toast } from 'react-toastify';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }
  async function onSubmit(e){
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth,email);
      toast.success("El reseteo de Password fué enviado.");
    } catch (error) {
      toast.error("No pudo enviarse el reseteo de password.");
    }

  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Olvidó su contraseña?</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[40%] lg:w-[35%] mb-12 md:mb-6">
          <img 
            src={forgot} 
            alt="Logo de Signin"  
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[40%] lg:w-[30%] lg:ml-20">
          <form onSubmit={onSubmit}> 
            <input 
              type="email" 
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Correo Electrónico"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
            />
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mr-4 mb-6">
                No Registrado?
                <Link 
                  to="/sign-up"
                  className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1">
                  Registrarse
                </Link>
              </p>
              <p>
                <Link 
                  to="/sign-in"
                  className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out">
                  Iniciar sesión en su lugar
                </Link>
              </p>
            </div>
            <button 
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800" 
              type="submit">
              Enviar Reseteo
            </button>
            <div className="flex items-center my-4 before:border-t before:flex-1 before:border-gray-500 after:border-t after:flex-1 after:border-gray-500">
              <p className="text-center font-semibold mx-4">O puedes ingresar mediante</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  )
}