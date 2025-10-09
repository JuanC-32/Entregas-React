import { useState } from "react";
import "./ItemCount.css";

export default function ItemCount({ stock, initial }) {
  const [count, setCount] = useState(initial);

  const increment = () => count < stock && setCount(count + 1);
  const decrement = () => count > 1 && setCount(count - 1);

  return (
    <div className="item-count">
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <button className="add-btn">Agregar al carrito</button>
    </div>
  );
}
