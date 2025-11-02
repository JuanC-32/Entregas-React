import React, { useState } from "react";
import "../styles/ItemCount.css";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increase = () => count < stock && setCount(count + 1);
  const decrease = () => count > 1 && setCount(count - 1);

  return (
    <div className="item-count">
      <button onClick={decrease}>-</button>
      <span>{count}</span>
      <button onClick={increase}>+</button>
      <button className="add-btn" onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;

