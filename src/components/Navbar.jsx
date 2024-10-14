// src/components/Navbar.jsx
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Importa el archivo CSS

const Navigation = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Navbar.Brand as={Link} to="/" className="navbar-brand">Mi Mochilita</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" />
      <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/" className="nav-link">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/cart" className="nav-link">Carrito</Nav.Link>
          <Nav.Link as={Link} to="/contacto" className="nav-link">Contacto</Nav.Link>
          <Nav.Link as={Link} to="/nosotros" className="nav-link">Nosotros</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
