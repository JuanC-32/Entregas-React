<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Mi Tienda" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Catálogo filtrado por categoría" />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2 style={{ textAlign: "center" }}>404 - Página no encontrada</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

=======
import NavBar from './components/NavBar'
import ItemListContainer from "./components/ItemListContainer";

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a Mi Tienda" />
    </>
  )
}

export default App
>>>>>>> 497721bb13e54d13fc7bdaaff58c3be9dd7e3c01
