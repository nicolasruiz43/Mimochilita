// src/components/Checkout.jsx
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import '../styles/Checkout.css'; // Importa el archivo CSS

// eslint-disable-next-line no-unused-vars
const Checkout = () => {
  const { cartItems, total, checkout } = useCart();
  const [formData, setFormData] = useState({
    nombre: '',
    direccion: '',
    telefono: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderData = {
      ...formData,
      total,
      fecha: new Date().toISOString(),
    };

    // Validación simple antes de llamar a checkout
    if (!cartItems.length) {
      alert("No hay productos en el carrito.");
      return;
    }
    
    checkout(orderData); // Llama a la función de checkout en el contexto
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <h4>Total: ${total}</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input type="text" className="form-control" name="nombre" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">Dirección</label>
          <input type="text" className="form-control" name="direccion" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">Teléfono</label>
          <input type="text" className="form-control" name="telefono" onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success">Confirmar Compra</button>
      </form>
      <a 
        href={`https://wa.me/<your-phone-number>?text=Quiero%20contactar%20sobre%20mi%20pedido.`} 
        className="btn btn-primary mt-3" 
        target="_blank" 
        rel="noopener noreferrer">
        Contactar al Vendedor
      </a>
    </div>
  );
};

export default Checkout;
