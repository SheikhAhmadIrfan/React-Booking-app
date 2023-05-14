import "./navbar.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false);

  const handleLogin = () => {
    navigate("/login")
  }

  const handleReg = () => {
    navigate("/register")
  }

  const handleHome = () => {
    navigate("/")
  }

  const handleAi = () => {
    navigate("/Ai")
  }

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div className="navbar">
      <div className="navcontainer">
        <span className="logo">Ahmad Booking</span>
        {
          showMenu && <div className="navitems">
            <button className="navbutton" onClick={handleAi}>Tour AI Help</button>
            <button className="navbutton" onClick={handleHome}>Home</button>
            <button className="navbutton" onClick={handleReg}>Sign Up</button>
            <button className="navbutton" onClick={handleLogin}>Login</button>
          </div>
        }
        <button className="menu-icon" onClick={toggleMenu}>☰</button>
      </div>
    </div>
  )
}

export default Navbar
