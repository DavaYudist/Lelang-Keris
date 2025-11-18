import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "./Tentang.css";

function Tentang() {
  return (
    <div className="tentang-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="section-subtitle">Tentang</h2>
            <h3 className="section-title">Keris Madura</h3>
            <p>
              Harta Berkenoq adalah sebuah galeri sekaligus workshop keris
              pusaka yang berlokasi di Desa Aeng Tong Tong, Sumenep, Madura.
              Kami berdedikasi untuk melestarikan seni tempa keris
              tradisional... (Silakan lanjutkan teks Anda di sini)
            </p>
            <Button variant="dark" className="mt-2">
              Lihat Selengkapnya
            </Button>
          </Col>

          <Col md={6}>
            <Image
              src="/Tentang-keris madura.jpg"
              alt="Tentang Keris Aeng Tong Tong"
              fluid
              rounded
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Tentang;
