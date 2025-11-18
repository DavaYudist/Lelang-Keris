import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

function MainNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      className={scrolled ? "navbar-scrolled" : "navbar-transparent"}
      variant="dark"
      expand="lg"
      fixed="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          Lelang Keris
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/tentang">
              Tentang
            </Nav.Link>
            <Nav.Link as={Link} to="/lokasi">
              Lokasi
            </Nav.Link>
            <Nav.Link as={Link} to="/lelang">
              Lelang
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Button variant="light" as={Link} to="/daftar" className="ms-2">
              Daftar
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
