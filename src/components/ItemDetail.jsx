// src/components/ItemDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import { useCart } from '../context/CartContext'; // Importar el contexto del carrito

const ItemDetail = () => {
  const { id } = useParams(); // Obtener el ID del producto de la URL
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Obtener la función addToCart del contexto
  const [item, setItem] = useState(null); // Estado para almacenar los datos del producto
  const [cantidad, setCantidad] = useState(1); // Estado para la cantidad

  useEffect(() => {
    const fetchItem = async () => {
      const docRef = doc(db, 'productos', id); // Referencia al documento
      const docSnap = await getDoc(docRef); // Obtener el documento

      if (docSnap.exists()) {
        setItem({ id: docSnap.id, ...docSnap.data() }); // Guardar los datos del producto
      } else {
        console.error("No se encontró el documento");
      }
    };

    fetchItem();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(item, cantidad); // Llamar a la función addToCart con el item y la cantidad seleccionada
    navigate('/cart'); // Redirigir a la página del carrito
  };

  if (!item) return <p>Cargando producto...</p>;

  return (
    <div className="container">
      <h2>{item.titulo}</h2>
      <img src={item.imagen} alt={item.titulo} className="img-fluid" />
      <p>Descripción: {item.descripcion}</p>
      <p>Precio: ${item.precio}</p>
      <label>
        Cantidad:
        <input
          type="number"
          min="1"
          value={cantidad}
          onChange={(e) => setCantidad(Number(e.target.value))} // Convertir a número
        />
      </label>
      <button className="btn btn-success" onClick={handleAddToCart}>
        ¡Lo Quiero!
      </button>
    </div>
  );
};

export default ItemDetail;
