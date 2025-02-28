import React, { useState } from 'react'
import signup from '../images/signup.jpg'; 
import { AiFillEyeInvisible,AiFillEye } from "react-icons/ai";
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';
import { getAuth,createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { db } from '../firebase';
import { doc, serverTimestamp,setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function SignUp() {
  const [showPassword,setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    nombre:"",
    apellido:"",
    telefono:"",
    email: "",
    password: "",

  });
  const {nombre, apellido, telefono, email, password} = formData;
  const navigate = useNavigate();
  function onChange(e) { const { id, value } = e.target; if (id === "telefono") {const re = /^\d*$/; if (re.test(value)) { setFormData((prevState) => ({ ...prevState, [id]: value, })); } } else { setFormData((prevState) => ({ ...prevState, [id]: value, })); }}
  async function onSubmit(e){
    e.preventDefault();

try {
  const auth = getAuth()
  const userCredential = await createUserWithEmailAndPassword(auth, email,password);
  updateProfile(auth.currentUser,{
    displayName: `${nombre} ${apellido}`,
  });
  const user = userCredential.user;
  const formDataCopy = {...formData};
  delete formDataCopy.password;
  formDataCopy.timestamp = serverTimestamp();

  await setDoc(doc(db,"users",user.uid),formDataCopy);
  //toast.success("Registro exitoso!")
  navigate('/');

} catch (error) {
  toast.error("Algo no funcionó bien con el registro.");
}

  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Registrarse</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[40%] lg:w-[35%] mb-12 md:mb-6">
        <img 
              src={signup} 
              alt="Logo de Signup"  
              className="w-full rounded-2xl"
            />
        </div>
        <div className="w-full md:w-[40%] lg:w-[30%] lg:ml-20">
          <form onSubmit={onSubmit}> 
          <input type="text" id="nombre"
            value={nombre}
            onChange={onChange}
            placeholder="Nombre"
            className=" mb-6 w-full px-4 py-2 text-xl
             text-gray-700 bg-white border-gray-300
             rounded transition ease-in-out"
            />
                <input type="text" id="apellido"
            value={apellido}
            onChange={onChange}
            placeholder="Apellido"
            className=" mb-6 w-full px-4 py-2 text-xl
             text-gray-700 bg-white border-gray-300
             rounded transition ease-in-out"
            />
               <input type="text" id="telefono" value={telefono} onChange={onChange} placeholder="Teléfono" 
               className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300
                rounded transition ease-in-out" />
            <input type="email" id="email"
            value={email}
            onChange={onChange}
            placeholder="Correo Electrónico"
            className=" mb-6 w-full px-4 py-2 text-xl
             text-gray-700 bg-white border-gray-300
             rounded transition ease-in-out"
            />
            <div className="relative mb-6">
            <input 
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={onChange}
              placeholder="Password"
              className="w-full px-4 py-2 text-xl
              text-gray-700 bg-white border-gray-300
              rounded transition ease-in-out"
            />
            {showPassword ? 
              <AiFillEyeInvisible className="absolute right-3 top-3 text-xl
                cursor-pointer"
                 onClick={() => setShowPassword
                  ((prevState)=> !prevState)}
                   />
            :<AiFillEye className="absolute right-3 top-3 text-xl cursor-pointer"
            onClick={() => setShowPassword
              ((prevState)=> !prevState)}
            />}
            </div>
            <div className="flex justify-between
              whitespace-nowrap text-sm
              sm:text-lg">
              <p className="mr-4 mb-6 ">
                  Tienes cuenta?
                <Link to="/sign-in"
                  className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1">Iniciar Sesión
                </Link>
              </p>
              <p>
                <Link to="/forgot-password"className="text-blue-600 hover:text-blue-800
                  transition duration-200 ease-in-out">
                  Olvidó su contraseña?
                </Link>
              </p>
            </div>
            <button className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800" type="submit">Registrarse</button>
              <div className="flex items-center my-4 before:border-t before:flex-1  before:border-gray-500 after:border-t after:flex-1  after:border-gray-500">
                <p className="text-center font-semibold mx-4">O puedes ingresar mediante</p>
              </div>
              <OAuth />
          </form>
             
        </div>
     </div>
    </section>
  )
}