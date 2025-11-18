import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Modal,
  Image,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CheckCircleFill, CreditCard, Bank } from "react-bootstrap-icons";
import "./CheckoutPage.css";

function CheckoutPage() {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleKonfirmasi = () => {
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
      navigate("/lelang");
    }, 3000);
  };

  return (
    <div className="checkout-page py-5">
      <Container>
        <h2 className="mb-4">Detail Pembelian</h2>
        <Row>
          <Col lg={8}>
            <Card className="mb-4 shadow-sm border-0">
              <Card.Body>
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="fw-bold">1. Detail Pemesanan</h5>
                  <a href="#" className="text-muted text-decoration-none small">
                    Ubah
                  </a>
                </div>
                <Row>
                  <Col md={6}>
                    <Form.Label className="text-muted small">Nama</Form.Label>
                    <div className="form-value-box">Bali Simalakama</div>
                  </Col>
                  <Col md={6}>
                    <Form.Label className="text-muted small">
                      Telepon
                    </Form.Label>
                    <div className="form-value-box">+62 812 1234 4321</div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Card className="mb-4 shadow-sm border-0">
              <Card.Body>
                <h5 className="fw-bold mb-3">2. Alamat Pengiriman</h5>
                <div className="form-value-box">
                  Jl. Trunojoyo Gg. 120 No. 40 RW 001 RT 009 Kota Sumenep
                </div>
              </Card.Body>
            </Card>

            <Card className="mb-4 shadow-sm border-0">
              <Card.Body>
                <h5 className="fw-bold mb-3">3. Metode Pembayaran Lelang</h5>
                <div className="payment-options">
                  <Form.Check
                    type="radio"
                    name="payment"
                    label="COD (Cash on Deal)"
                    className="mb-3 fw-bold"
                  />
                  <div className="bank-option-box mb-2">
                    <Form.Check
                      type="radio"
                      name="payment"
                      label="Bank BCA"
                      defaultChecked
                    />
                  </div>
                  <div className="bank-option-box mb-2">
                    <Form.Check type="radio" name="payment" label="Bank BRI" />
                  </div>
                  <div className="bank-option-box">
                    <Form.Check
                      type="radio"
                      name="payment"
                      label="Bank MANDIRI"
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card className="border-0 bg-gray-custom">
              <Card.Body>
                <h5 className="fw-bold mb-4">Detail Barang</h5>

                <div className="d-flex mb-4">
                  <Image
                    src="/Produk-Keris1.jpg"
                    rounded
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="ms-3">
                    <h6 className="fw-bold mb-1">Keris Simalakama</h6>
                    <p className="text-muted small mb-0">Empu Lil Bah</p>
                    <p className="fw-bold small mt-1">
                      Harga Penawaran Rp 7.000.000
                    </p>
                  </div>
                </div>

                <hr />

                <div className="d-flex justify-content-between mb-2">
                  <span>Penawaran</span>
                  <span className="fw-bold">Rp 7.000.000</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Perawatan Keris</span>
                  <span>Rp 300.000</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Pajak</span>
                  <span>Rp 700.000</span>
                </div>
                <div className="d-flex justify-content-between mb-4">
                  <span>Ongkos Kirim</span>
                  <span>Rp 50.000</span>
                </div>

                <hr />

                <div className="d-flex justify-content-between mb-4 fs-5 fw-bold">
                  <span>Total</span>
                  <span>Rp 8.050.000</span>
                </div>

                <Button
                  variant="dark"
                  size="lg"
                  className="w-100 py-3"
                  onClick={handleKonfirmasi}
                >
                  Konfirmasi Pembayaran
                </Button>
                <p className="text-muted small mt-3 text-center">
                  Jika anda menekan "Konfirmasi Pembayaran" maka anda setuju
                  dengan ketentuan lelang.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Modal show={showSuccess} centered className="modal-success">
        <Modal.Body className="text-center p-5">
          <div className="success-icon mb-4">
            <CheckCircleFill size={80} color="#28a745" />
          </div>
          <h2 className="fw-bold">Pembayaran Sukses</h2>
          <p className="text-muted">
            Terima kasih, penawaran Anda telah dikirim.
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default CheckoutPage;
