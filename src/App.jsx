import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
import { CartProvider } from "./context/CartContext";
import { useEffect } from "react";
import { uploadProducts } from "./utils/uploadProducts";

function App() {
    useEffect(() => {
    //uploadProducts(); 
  }, []);
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

