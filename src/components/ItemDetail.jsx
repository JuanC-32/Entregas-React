import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import "../styles/ItemDetail.css";

const ItemDetail = ({ item }) => {
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAdd = (quantity) => {
    addToCart(item, quantity);
    setAdded(true);
  };

  return (
    <div className="item-detail">
      <img src={item.img} alt={item.name} /> 
      <div className="detail-info">
        <h2>{item.name}</h2> 
        <p>{item.description}</p>
        <h3>${item.price}</h3>
        {added ? (
          <Link to="/cart" className="btn">
            Ir al carrito
          </Link>
        ) : (
          <ItemCount stock={item.stock || 10} onAdd={handleAdd} /> 
        )}
      </div>
    </div>
  );
};

export default ItemDetail;


