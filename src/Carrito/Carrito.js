import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Carrito.css';

const Carrito = () => {
  return (
    <div className="carrito">
      <Card className="shadow">
        <Card.Body>
          <Card.Title>Mi Carrito</Card.Title>
          <p>No hay productos en el carrito.</p>
          <Button variant="primary" type="button">
            Proceder al Pago
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Carrito;
