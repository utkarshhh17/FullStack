import { AnimatePresence } from "framer-motion";
import { Route, Routes , useNavigate} from "react-router-dom";
import Home from "./components/Home Page/Home";
import Login from "./components/Login Page/Login";
import Register from "./components/Register Page/Register";
import ResetPassword from "./components/Reset Page/ResetPassword";
import { useAuthContext } from "./hooks/useAuthContext";


function App() {
  const {user, dispatch}=useAuthContext()
  const navigate=useNavigate();

  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} >
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<ResetPassword />} />
   
        
      </Routes>
    </AnimatePresence>
  );
}

export default App;