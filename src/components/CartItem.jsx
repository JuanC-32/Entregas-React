//import { useContext } from "react";
//import { CartContext } from "../context/CartContext";
//import "../styles/CartItem.css";
//
//const CartItem = ({ product }) => {
//  const { removeItem } = useContext(CartContext);
//
//  return (
//    <div className="cart-item">
//      <img src={product.image} alt={product.title} />
//      <div className="cart-item-info">
//        <h3>{product.title}</h3>
//        <p>Cantidad: {product.quantity}</p>
//        <p>Precio: ${product.price}</p>
//        <p>Subtotal: ${product.price * product.quantity}</p>
//      </div>
//      <button className="btn-remove" onClick={() => removeItem(product.id)}>
//        Eliminar
//      </button>
//    </div>
//  );
//};

//export default CartItem;

import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/CartItem.css";

const CartItem = ({ product }) => {
  const { removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <img src={product.img} alt={product.name} className="cart-item-img" />
      <div className="cart-item-info">
        <h3>{product.name}</h3>
        <p>Cantidad: {product.quantity}</p>
        <p>Precio: ${product.price}</p>
        <p>Subtotal: ${product.price * product.quantity}</p>
      </div>
      <button className="btn-remove" onClick={() => removeFromCart(product.id)}>
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;

