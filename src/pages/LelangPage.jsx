import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Card,
  Button,
  Badge,
} from "react-bootstrap";
import { Search, Clock, GeoAlt } from "react-bootstrap-icons";
import "./LelangPage.css";

const dataLelang = [
  {
    id: 1,
    imgSrc: "/Produk-Keris1.jpg",
    nama: "Keris Barang",
    empu: "Empu Barada",
    harga: "Rp 2.000.000",
    tgl: "21 Okt 2025",
    jam: "19:00 - 21:00",
  },
  {
    id: 2,
    imgSrc: "/Produk-Keris1.jpg",
    nama: "Keris Sumenep",
    empu: "Empu Simanjuntak",
    harga: "Rp 1.500.000",
    tgl: "22 Okt 2025",
    jam: "19:00 - 21:00",
  },
  {
    id: 3,
    imgSrc: "/Produk-Keris1.jpg",
    nama: "Keris Naga",
    empu: "Empu Barasuara",
    harga: "Rp 3.000.000",
    tgl: "23 Okt 2025",
    jam: "19:00 - 21:00",
  },
  {
    id: 4,
    imgSrc: "/Produk-Keris1.jpg",
    nama: "Keris Antik",
    empu: "Empu LilBah",
    harga: "Rp 5.000.000",
    tgl: "24 Okt 2025",
    jam: "19:00 - 21:00",
  },
];

function LelangCard({ item }) {
  return (
    <Link to={`/lelang/${item.id}`} className="lelang-card-link">
      <Card className="lelang-card shadow-sm">
        <Card.Img variant="top" src={item.imgSrc} />
        <Card.Body>
          <Card.Title>{item.nama}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{item.empu}</Card.Subtitle>
          <Badge bg="dark" className="mb-2">
            {item.harga}
          </Badge>
          <p className="card-info">
            <Clock className="me-2" /> {item.tgl} | {item.jam}
          </p>
          <p className="card-info">
            <GeoAlt className="me-2" /> Desa Aeng Tong Tong
          </p>
        </Card.Body>
      </Card>
    </Link>
  );
}

function LelangRow({ title }) {
  return (
    <div className="lelang-row-wrapper py-4">
      <h2 className="lelang-row-title">{title}</h2>
      <div className="horizontal-scroll">
        {dataLelang.map((item) => (
          <LelangCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function LelangPage() {
  return (
    <Container fluid className="p-4 lelang-page-container">
      <Row className="justify-content-center mb-4">
        <Col md={8} lg={6}>
          <InputGroup className="shadow-sm">
            <InputGroup.Text>
              <Search />
            </InputGroup.Text>
            <Form.Control
              type="search"
              placeholder="Cari Lelang..."
              className="py-2"
            />
          </InputGroup>
        </Col>
      </Row>

      <LelangRow title="Keris Antik" />
      <LelangRow title="Keris Pusaka" />
    </Container>
  );
}

export default LelangPage;
