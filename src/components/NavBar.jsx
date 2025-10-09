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

