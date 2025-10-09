import { Link } from "react-router-dom";
import "./Item.css";

export default function Item({ item }) {
  return (
    <div className="item-card">
      <img src={item.img} alt={item.name} />
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <Link to={`/item/${item.id}`} className="btn">Ver detalle</Link>
    </div>
  );
}
