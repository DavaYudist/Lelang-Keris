import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LoginPage.css";

function SignUpPage() {
  return (
    <Container fluid className="p-0">
      <Row className="g-0 vh-100">
        <Col md={6} className="login-form-column">
          <div className="login-form-container">
            <h2 className="mb-4">Buat Akun Baru</h2>
            <p className="text-muted mb-4">
              Daftar untuk memulai petualangan lelang keris Anda.
            </p>

            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nama Lengkap</Form.Label>
                <Form.Control type="text" placeholder="Masukkan nama Anda" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Alamat Email</Form.Label>
                <Form.Control type="email" placeholder="Masukkan email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                <Form.Label>Konfirmasi Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Konfirmasi password"
                />
              </Form.Group>

              <Button variant="dark" type="submit" className="w-100 mt-3">
                Daftar
              </Button>
            </Form>

            <div className="text-center mt-4">
              <p className="text-muted">
                Sudah punya akun? <Link to="/login">Login di sini</Link>
              </p>
            </div>
          </div>
        </Col>

        <Col md={6} className="login-image-column d-none d-md-block" />
      </Row>
    </Container>
  );
}

export default SignUpPage;
