import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Perfil from "./Pages/Perfil";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import ForgotPassword from "./Pages/ForgotPassword";
import Juegos from "./Pages/Juegos";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/perfil" element={<Perfil/>} />
          <Route path="/sign-in" element={<SignIn/>} />
          <Route path="/sign-Up" element={<SignUp/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/juegos" element={<Juegos/>} />
         

        </Routes>

      </Router>
    </>
  );
}

export default App;
