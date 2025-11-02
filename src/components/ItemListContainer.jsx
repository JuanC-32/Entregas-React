import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemList from "./ItemList";
import "../styles/ItemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productsRef = collection(db, "products");
    const q = categoryId
      ? query(productsRef, where("category", "==", categoryId))
      : productsRef;

    getDocs(q)
      .then((res) => {
        const items = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("🧩 Productos obtenidos:", items);
        setProducts(items);
      })
      .catch((err) => console.error("❌ Error al obtener productos:", err))
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <h2 className="loader">Cargando productos...</h2>;

  return <ItemList items={products} />; 
};

export default ItemListContainer;



