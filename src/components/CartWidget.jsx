//import React from "react";
//import "../styles/CartWidget.css";
//
//const CartWidget = () => {
//  return (
//    <div className="cart-widget">
//      <span role="img" aria-label="cart" className="cart-icon">
//        🛒
//      </span>
//      <span className="cart-count">0</span>
//    </div>
//  );
//};
//
//export default CartWidget;

import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/CartWidget.css";

const CartWidget = () => {
  const { totalItems, totalPrice } = useCart();

  return (
    <Link to="/cart" className="cart-widget">
      <span role="img" aria-label="cart" className="cart-icon">
        🛒
      </span>
      <span className="cart-count">{totalItems}</span>
      {totalPrice > 0 && <span className="cart-total">(${totalPrice})</span>}
    </Link>
  );
};

export default CartWidget;
