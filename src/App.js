import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hommee from './pages/home/hommee';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Ai from './pages/AI/Ai';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hommee />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Ai" element={<Ai />} />
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
