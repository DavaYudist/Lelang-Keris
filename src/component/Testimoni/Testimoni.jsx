import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "./Testimoni.css"; // File style kustom kita

const dataTestimoni = [
  {
    id: 1,
    imgSrc: "/testi-1.jpg",
    teks: '"Saya sangat puas dengan detail dan garap keris ini. Benar-benar mahakarya yang hidup..."',
    nama: "Bambang Pamungkas.",
    jabatan: "Kolektor Keris, Jakarta",
  },
  {
    id: 2,
    imgSrc: "/testi-2.jpg",
    teks: '"Proses lelangnya transparan dan adil. Koleksi Aeng Tong Tong tidak pernah mengecewakan..."',
    nama: "Raden S.",
    jabatan: "Budayawan, Yogyakarta",
  },
  {
    id: 3,
    imgSrc: "/testi-3.jpg",
    teks: '"Pelayanan luar biasa. Keris sampai dengan aman dan sertifikatnya lengkap. Sangat terpercaya..."',
    nama: "Ahmad P.",
    jabatan: "Pemerhati Budaya, Surabaya",
  },
];

function Testimoni() {
  return (
    <div className="testimoni-section py-5">
      <Container>
        <Row className="text-center mb-4">
          <Col>
            <h2 className="section-title">Testimoni</h2>
            <p>Apa kata mereka tentang mahakarya kami</p>
          </Col>
        </Row>

        <Row>
          {dataTestimoni.map(testi => (
            <Col lg={4} md={6} key={testi.id} className="mb-4">
              <Card className="h-100 text-center shadow-sm border-0">
                <Card.Body>
                  <Image
                    src={testi.imgSrc}
                    alt={testi.nama}
                    className="testi-img"
                    roundedCircle
                  />
                  <blockquote className="blockquote mb-3 mt-3">
                    <p className="mb-0">{testi.teks}</p>
                  </blockquote>
                  <Card.Title className="testi-nama">{testi.nama}</Card.Title>
                  <Card.Subtitle className="text-muted testi-jabatan">
                    {testi.jabatan}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Testimoni;
