import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './Barra.css';

const Barra = ({ toggleCart, isLoggedIn }) => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="#">Mi Mochilita</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#inicio">Inicio</Nav.Link>
        <Nav.Link href="#productos">Productos</Nav.Link>
        <Nav.Link href="#nosotros">Nosotros</Nav.Link>
      </Nav>
      {isLoggedIn ? (
        <Button onClick={toggleCart}>Carrito</Button>
      ) : (
        <>
          <Button href="#login" variant="outline-light">Iniciar Sesión</Button>
          <Button href="#register" variant="light">Registrarse</Button>
        </>
      )}
    </Navbar>
  );
};

export default Barra;
