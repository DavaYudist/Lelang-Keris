import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Bell, Cart, BoxSeam, PersonCircle } from "react-bootstrap-icons";
import "./NavbarLelang.css";

function NavbarLelang() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container fluid className="px-4">
        <Navbar.Brand as={Link} to="/lelang">
          Aeng Keris
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/lelang">
              Beranda
            </Nav.Link>
            <Nav.Link as={Link} to="/tentang">
              Tentang
            </Nav.Link>
            <Nav.Link as={Link} to="/kontak">
              Kontak
            </Nav.Link>
            <Nav.Link as={Link} to="/produk">
              Produk
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link href="#" className="nav-icon">
              <Bell size={20} />
            </Nav.Link>
            <Nav.Link href="#" className="nav-icon">
              <Cart size={20} />
            </Nav.Link>
            <Nav.Link href="#" className="nav-icon">
              <BoxSeam size={20} />
            </Nav.Link>
            <Nav.Link href="#" className="ms-2">
              <PersonCircle size={24} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLelang;
