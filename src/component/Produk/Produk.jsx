import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Produk.css";

const dataProduk = [
  {
    id: 1,
    imgSrc: "/Produk-Keris1.jpg",
    nama: "Keris Pasopati",
    deskripsi: "Dapur Pasopati, estimasi tangguh Pajajaran. Warangka...",
  },
  {
    id: 2,
    imgSrc: "Produk-keris2.jpg",
    nama: "Keris Singo Barong",
    deskripsi: "Dapur Singo Barong, pamor kulit semangka. Fisik gagah...",
  },
  {
    id: 3,
    imgSrc: "/Produk-keris3.jpg",
    nama: "Keris Naga Sasra",
    deskripsi: "Dapur Naga Sasra, kinatah emas asli. Pusaka kolektor...",
  },
];

function Produk() {
  return (
    <div className="produk-section py-5 bg-light">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2 className="section-title">Produk</h2>
            <p>Koleksi mahakarya terbaik dari empu Aeng Tong Tong</p>
          </Col>
        </Row>

        <Row>
          {dataProduk.map(produk => (
            <Col lg={4} md={6} key={produk.id} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Img variant="top" src={produk.imgSrc} />
                <Card.Body>
                  <Card.Title>{produk.nama}</Card.Title>
                  <Card.Text>{produk.deskripsi}</Card.Text>
                  <Button variant="dark">Lihat Detail</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Produk;
