import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./assets/components/Navbar/navbar";
import ItemListContainer from "./assets/components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./assets/components/ItemDetailContainer/ItemDetailContainer";
import CartPage from "./assets/components/CartPage/CartPage.jsx";
import './App.css'

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/product/:productId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
      </Routes>
    </div>
  );
}

export default App;
