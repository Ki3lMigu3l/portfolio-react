import React, { useState } from "react";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../../assets/logo-bg-rmv.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (

    <div className="navbar">

      <div className="navbar-logo" >       
        <img src={logo} alt="Logo da Ezcoder" className="navbar-logo-img"/><h1>Ezcoder</h1></div>
      <div className="hamburguer" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
      </div>
      <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#support">Support</a>
          </li>
          <li>
            <a href="#contacts">Contact</a>
          </li>
          <li>
            <a href="#aboutme">About me</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
