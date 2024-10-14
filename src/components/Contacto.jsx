// src/components/Contacto.jsx
import React, { useState } from 'react';
import '../styles/Contacto.css'; // Importa el archivo CSS

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje!');
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <div className="container mt-5">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">Mensaje</label>
          <textarea
            className="form-control"
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
