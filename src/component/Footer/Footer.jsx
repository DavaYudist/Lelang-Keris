import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Telephone, 
  Envelope, 
  GeoAlt 
} from 'react-bootstrap-icons';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-section bg-dark text-light py-5">
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <h5 className="footer-brand">Aeng Keris</h5>
            <p>
              Keris Nuswantara. Jl. Raya Aeng Tong Tong,
              Sumenep, Madura.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon"><Facebook /></a>
              <a href="#" className="social-icon"><Instagram /></a>
              <a href="#" className="social-icon"><Youtube /></a>
            </div>
          </Col>

          <Col lg={2} md={6} className="mb-4 mb-lg-0">
            <h5>Informasi</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/tentang" className="footer-link">Tentang</Nav.Link>
              <Nav.Link as={Link} to="/produk" className="footer-link">Produk</Nav.Link>
              <Nav.Link as={Link} to="/kontak" className="footer-link">Kontak</Nav.Link>
            </Nav>
          </Col>

          <Col lg={2} md={6} className="mb-4 mb-lg-0">
            <h5>Lelang</h5>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/lelang" className="footer-link">Lelang Saat Ini</Nav.Link>
              <Nav.Link as={Link} to="/lelang/cara" className="footer-link">Cara Ikut</Nav.Link>
              <Nav.Link as={Link} to="/login" className="footer-link">Login</Nav.Link>
            </Nav>
          </Col>

          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <h5>Hubungi Kami</h5>
            <ul className="list-unstyled contact-list">
              <li>
                <Telephone className="me-2" /> +62 812-3456-7890
              </li>
              <li>
                <Envelope className="me-2" /> info@aengkeris.com
              </li>
              <li>
                <GeoAlt className="me-2" /> Desa Aeng Tong Tong, Sumenep
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="mt-4" />
        <Row>
          <Col className="text-center pt-3">
            <p>&copy; {new Date().getFullYear()} Aeng Keris. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;