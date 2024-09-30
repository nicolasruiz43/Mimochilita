import React, { useState } from 'react';
import './App.css';
import Barra from './Barra/Barra';  // Importar desde la carpeta Barra
import ProductList from './ProductList/ProductList';  // Importar desde la carpeta ProductList
import Carrito from './Carrito/Carrito';  // Importar desde la carpeta Carrito
import Minuto from './Minuto/Minuto';  // Importar desde la carpeta Minuto
import Body from './Body/Body';  // Importar el estilo de Body

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="App">
      <Barra toggleCart={toggleCart} isLoggedIn={isLoggedIn} />
      <Body />
      <main>
        <h1 className="title">Mi Mochilita</h1>
        <ProductList />
        {isCartOpen && <Carrito />}
        <Minuto />
      </main>
    </div>
  );
}

export default App;
