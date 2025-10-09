import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ItemList from "./ItemList";
import "./ItemListContainer.css";

export default function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          resolve(products.filter(p => p.category === categoryId));
        } else {
          resolve(products);
        }
      }, 800);
    });

    getProducts.then(res => setItems(res));
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <ItemList items={items} />
    </div>
  );
}

