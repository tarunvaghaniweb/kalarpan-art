import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "../src/Pages/Index";
import Login from "../src/Pages/Login";
import Singup from "../src/Pages/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Singup/>}/>
      </Routes>
    </Router>
  );
}

export default App;