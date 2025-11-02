//import React from "react";
//import { Link } from "react-router-dom";
//import { useCart } from "../context/CartContext";
//import "../styles/Cart.css";
//
//const Cart = () => {
//  const { cart, removeFromCart, clearCart, totalPrice } = useCart();
//
//  if (cart.length === 0) {
//    return (
//      <div className="cart-empty">
//        <h2>🛒 Tu carrito está vacío</h2>
//        <Link to="/" className="btn">
//          Volver a la tienda
//        </Link>
//      </div>
//    );
//  }
//
//  return (
//    <div className="cart-container">
//      <h2>🛍️ Tu carrito</h2>
//      <div className="cart-items">
//        {cart.map((item) => (
//          <div key={item.id} className="cart-item">
//            <img src={item.img} alt={item.name} className="cart-img" />
//            <div className="cart-info">
//              <h3>{item.name}</h3>
//              <p>{item.description}</p>
//              <p>
//                <strong>${item.price}</strong> × {item.quantity} unidades
//              </p>
//              <p>Total: ${item.price * item.quantity}</p>
//              <button className="btn-remove" onClick={() => removeFromCart(item.id)}>
//                Eliminar
//              </button>
//            </div>
//          </div>
//        ))}
//      </div>
//
//      <div className="cart-summary">
//        <h3>Total general: ${totalPrice}</h3>
//        <div className="cart-buttons">
//          <button className="btn-clear" onClick={clearCart}>
//            Vaciar carrito
//          </button>
//          <Link to="/checkout" className="btn-checkout">
//            Finalizar compra
//          </Link>
//        </div>
//      </div>
//    </div>
//  );
//};
//
//export default Cart;

import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import "../styles/Cart.css";

const Cart = () => {
  const { cart, clearCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>🛒 Tu carrito está vacío</h2>
        <Link to="/" className="btn">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>🛍️ Tu carrito</h2>
      <div className="cart-items">
        {cart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total general: ${totalPrice}</h3>
        <div className="cart-buttons">
          <button className="btn-clear" onClick={clearCart}>
            Vaciar carrito
          </button>
          <Link to="/checkout" className="btn-checkout">
            Finalizar compra
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
