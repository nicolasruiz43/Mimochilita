// src/components/ItemDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import { useCart } from '../context/CartContext';
import '../styles/ItemDetail.css'; // Importa el archivo CSS

const ItemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [item, setItem] = useState(null);
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    const fetchItem = async () => {
      const docRef = doc(db, 'productos', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setItem({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.error("No se encontró el documento");
      }
    };

    fetchItem();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(item, cantidad);
    navigate('/cart');
  };

  if (!item) return <p>Cargando producto...</p>;

  return (
    <div className="container">
      <div className="product-details">
        <div className="product-image">
          <img src={item.imagen} alt={item.titulo} className="img-fluid" />
        </div>
        <div className="product-info">
          <h2>{item.titulo}</h2>
          <p>Descripción: {item.descripcion}</p>
          <p>Precio: ${item.precio}</p>
          <label>
            Cantidad:
            <input
              type="number"
              min="1"
              value={cantidad}
              onChange={(e) => setCantidad(Number(e.target.value))}
            />
          </label>
          <button className="btn btn-success" onClick={handleAddToCart}>
            ¡Lo Quiero!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
