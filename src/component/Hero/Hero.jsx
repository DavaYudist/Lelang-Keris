import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-section">
      <Container className="hero-content">
        <Row>
          <Col lg={8}>
            <h1>
              Pelelangan Keris Cipta Karya Dari Desa Aeng Tong Tong Sumenep
            </h1>
            <p className="mt-3">
              Sebuah platform digital untuk melestarikan dan memperkenalkan
              mahakarya empu keris dari Desa Aeng Tong Tong ke panggung dunia.
            </p>
            <Button variant="light" size="lg" className="mt-3">
              Lihat Koleksi
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
