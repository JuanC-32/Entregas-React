import Item from "./Item";
import "../styles/ItemList.css";

export default function ItemList({ items = [] }) {
  if (items.length === 0) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div className="item-list">
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

