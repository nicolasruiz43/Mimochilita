import React from 'react';
import './Minuto.css';

const Minuto = () => {
  const product = {
    id: 1,
    name: 'Minuto Mochila',
    price: 100,
    imageUrl: 'https://ruta_a_imagen.jpg'
  };

  return (
    <div className="minuto-product">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <button>Añadir al carrito</button>
    </div>
  );
};

export default Minuto;
