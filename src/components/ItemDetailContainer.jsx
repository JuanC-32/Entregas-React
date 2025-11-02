import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemDetail from "./ItemDetail";
import "../styles/ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    const itemRef = doc(db, "products", itemId);

    getDoc(itemRef)
      .then((res) => setItem({ id: res.id, ...res.data() }))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) return <h2 className="loader">Cargando producto...</h2>;

  return item ? <ItemDetail item={item} /> : <h2>Producto no encontrado</h2>;
};

export default ItemDetailContainer;
