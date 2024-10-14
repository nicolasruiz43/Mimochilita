// src/components/Nosotros.jsx
import React from 'react';
import '../styles/Nosotros.css'; // Importa el archivo CSS

const Nosotros = () => {
  return (
    <div className="container">
      <h2>Nosotros</h2>
      <p>
        Bienvenido a nuestra tienda en línea. Aquí puedes encontrar los mejores productos a los mejores precios.
        Nos enfocamos en ofrecer un servicio de calidad y una experiencia de compra única para todos nuestros clientes.
      </p>
      <p>
        Nos aseguramos de mantener una comunicación abierta y transparente con nuestros compradores, garantizando la
        mejor atención en todo momento.
      </p>
      <div className="contact-info">
        <h3>Información de Contacto</h3>
        <p><strong>Teléfono:</strong> +54 11 1234 5678</p>
        <p><strong>Email:</strong> contacto@mitienda.com</p>
        <p><strong>Dirección:</strong> Av. Siempre Viva 123, Buenos Aires, Argentina</p>
        <p>
          También puedes encontrarnos en nuestras redes sociales:
          <a href="https://www.facebook.com/mitienda" target="_blank" rel="noopener noreferrer"> Facebook</a>,
          <a href="https://www.instagram.com/mitienda" target="_blank" rel="noopener noreferrer"> Instagram</a>.
        </p>
      </div>
    </div>
  );
};

export default Nosotros;
