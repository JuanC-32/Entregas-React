<<<<<<< HEAD
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Mi Tienda</Link>

      <ul className="nav-links">
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/category/remeras">Remeras</NavLink></li>
        <li><NavLink to="/category/pantalones">Pantalones</NavLink></li>
        <li><NavLink to="/category/zapatillas">Zapatillas</NavLink></li>
        <li><NavLink to="/contacto">Contacto</NavLink></li>
      </ul>

      <CartWidget />
    </nav>
  );
}

=======
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
>>>>>>> 497721bb13e54d13fc7bdaaff58c3be9dd7e3c01
