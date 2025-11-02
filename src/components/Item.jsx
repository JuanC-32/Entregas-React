import { Link } from "react-router-dom";
import "../styles/Item.css";

export default function Item({ item }) {
  return (
    <div className="item-card">
      <img src={item.img} alt={item.name} className="item-img" />
      <div className="item-info">
        <h3>{item.name}</h3>
        <p className="item-price">${item.price}</p>
        <Link to={`/item/${item.id}`} className="btn btn-detail">
          Ver detalle
        </Link>
      </div>
    </div>
  );
}
