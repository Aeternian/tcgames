import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Perfil from "./Pages/Perfil";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import ForgotPassword from "./Pages/ForgotPassword";
import Juegos from "./Pages/Juegos";
import Header from "./components/Header";
import JuegoInfo from "./Pages/JuegoInfo";
import { ToastContainer, toast } from "react-toastify";


function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/perfil" element={<Perfil/>} />
          <Route path="/sign-in" element={<SignIn/>} />
          <Route path="/sign-Up" element={<SignUp/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/juegos" element={<Juegos/>} />
          <Route path="/JuegoInfo/:id" element={<JuegoInfo/>} />
         

        </Routes>

      </Router>
      <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </>
  );
}

export default App;
