// src/components/Item.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Item.css'; // Importa el archivo CSS

const Item = ({ item }) => {
  const navigate = useNavigate();

  const handleWantClick = () => {
    navigate(`/item/${item.id}`); // Redirigir a la página del producto
  };

  return (
    <div className="col-md-4">
      <div className="card mb-4">
        <img src={item.imagen} alt={item.titulo} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{item.titulo}</h5>
          <p className="card-text">Precio: ${item.precio}</p>
          <button className="btn btn-primary" onClick={handleWantClick}>
            ¡Lo Quiero!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
