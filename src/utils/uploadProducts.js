import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import products from "../data/products";

export const uploadProducts = async () => {
  const productsRef = collection(db, "products");

  for (const product of products) {
    const q = query(productsRef, where("name", "==", product.name));
    const existing = await getDocs(q);

    if (existing.empty) {
      await addDoc(productsRef, product);
      console.log(`✅ Producto agregado: ${product.name}`);
    } else {
      console.log(`⚠️ Producto ya existe: ${product.name}`);
    }
  }

  console.log("🔥 Carga finalizada sin duplicados.");
};
