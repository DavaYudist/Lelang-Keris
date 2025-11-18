// 1. IMPORT useState DARI REACT (PENTING)
import React, { useState } from "react";

import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Card,
  Badge,
  Modal,
  Form,
  InputGroup,
} from "react-bootstrap";
import { Clock, GeoAlt } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";

import "./DetailPage.css";

const dataLelangLainnya = [
  {
    id: 2,
    imgSrc: "/Produk-Keris1.jpg",
    nama: "Keris Sumenep",
    empu: "Empu Berkenoq",
    harga: "Rp 1.500.000",
    tgl: "22 Okt 2025",
  },
  {
    id: 3,
    imgSrc: "/Produk-Keris1.jpg",
    nama: "Keris Naga",
    empu: "Empu Berkenoq",
    harga: "Rp 3.000.000",
    tgl: "23 Okt 2025",
  },
  {
    id: 4,
    imgSrc: "/Produk-Keris1.jpg",
    nama: "Keris Antik",
    empu: "Empu Berkenoq",
    harga: "Rp 5.000.000",
    tgl: "24 Okt 2025",
  },
];

function DetailPage() {
  const navigate = useNavigate();

  const [showBidModal, setShowBidModal] = useState(false);
  const [bidAmount, setBidAmount] = useState("");

  const handleOpenModal = () => setShowBidModal(true);
  const handleCloseModal = () => setShowBidModal(false);

  const handleSubmitBid = () => {
    setShowBidModal(false);
    navigate("/checkout");
  };

  return (
    <div className="detail-page-container py-5">
      <Container>
        <Row>
          <Col lg={6}>
            <Image src="/Produk-Keris1.jpg" fluid rounded />
          </Col>

          <Col lg={6}>
            <h1>Nama Keris</h1>
            <p className="text-muted">Pembuat Keris/Empu Keris</p>
            <h2 className="price-open-bid">Rp 7.000.000</h2>
            <p className="text-muted">harga open bid</p>
            <p className="mt-4">
              Deskripsi singkat dari keris. Menjelaskan pamor, tangguh, dan
              filosofi yang terkandung.
            </p>
            <div className="countdown-timer my-3">
              Waktu tersisa: <span>12 Jam 11 Menit 10 Detik</span>
            </div>

            <Button
              variant="dark"
              size="lg"
              className="w-100 btn-bid"
              onClick={handleOpenModal}
            >
              Buat Penawaran Harga
            </Button>
          </Col>
        </Row>

        <h2 className="mt-5 mb-4">Lelang Lainnya</h2>
        <Row>
          {dataLelangLainnya.map((item) => (
            <Col lg={4} md={6} key={item.id} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Img
                  variant="top"
                  src={item.imgSrc}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{item.nama}</Card.Title>
                  <Badge bg="dark" className="mb-2">
                    {item.harga}
                  </Badge>
                  <div className="small text-muted">
                    <Clock className="me-1" /> {item.tgl}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={showBidModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Masukkan Penawaran Anda</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Harga Penawaran (Rupiah)</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text>Rp</InputGroup.Text>
              <Form.Control
                type="number"
                placeholder="Contoh: 7500000"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
                autoFocus
              />
            </InputGroup>
            <Form.Text className="text-muted">
              Minimal kenaikan bid adalah Rp 50.000 dari harga terakhir.
            </Form.Text>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Batal
          </Button>
          <Button variant="dark" onClick={handleSubmitBid}>
            Lanjut Pembayaran
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DetailPage;
