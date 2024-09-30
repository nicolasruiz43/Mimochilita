import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={index} className="product-item">
          <img
            src={product.imageUrl}
            alt={product.name}
            style={{ width: '100px', height: '100px' }} // Ajustar tamaño de la imagen
          />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Precio: ${product.price}</p>
          <button>Añadir al carrito</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
