// src/components/ItemList.jsx
import React from 'react';
import Item from './Item'; // Asegúrate de que la ruta sea correcta

const ItemList = ({ items }) => {
  return (
    <div className="row">
      {items.length > 0 ? (
        items.map(item => (
          <Item key={item.id} item={item} />
        ))
      ) : (
        <p>No hay productos disponibles.</p> // Mensaje si no hay productos
      )}
    </div>
  );
};

export default ItemList;
