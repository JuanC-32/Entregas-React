import ItemCount from "./ItemCount";
import "./ItemDetail.css";

export default function ItemDetail({ product }) {
  return (
    <div className="item-detail">
      <img src={product.img} alt={product.name} />
      <div className="detail-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
        <ItemCount stock={10} initial={1} />
      </div>
    </div>
  );
}
