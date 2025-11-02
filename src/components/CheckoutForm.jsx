import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useCart } from "../context/CartContext";
import "../styles/CheckoutForm.css";

const CheckoutForm = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = {
      buyer: form,
      items: cart,
      total: totalPrice,
      date: new Date(),
    };

    const ordersRef = collection(db, "orders");
    const docRef = await addDoc(ordersRef, order);

    setOrderId(docRef.id);
    clearCart();
  };

  if (orderId)
    return (
      <div className="checkout-success">
        <h2>✅ Compra realizada con éxito</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
      </div>
    );

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h2>Finalizar compra</h2>
      <input name="name" placeholder="Nombre completo" onChange={handleChange} required />
      <input name="email" placeholder="Correo electrónico" onChange={handleChange} required />
      <input name="address" placeholder="Dirección" onChange={handleChange} required />
      <button type="submit">Confirmar compra</button>
    </form>
  );
};

export default CheckoutForm;
