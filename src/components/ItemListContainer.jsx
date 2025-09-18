import React from "react";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <p>Aquí pronto verás nuestro catálogo de productos 👕👟🎧</p>
    </div>
  );
};

export default ItemListContainer;
