import React from "react";
import CartWidget from "./CartWidget.jsx";
import "./NavBar.css";


const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <h1 className="logo">Mi Tienda</h1>

      {/* Enlaces */}
      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>

      {/* Carrito */}
      <CartWidget />
    </nav>
  );
};

export default NavBar;
