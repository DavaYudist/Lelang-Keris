import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  return (
    <Container fluid className="p-0">
      <Row className="g-0 vh-100">
        <Col md={6} className="login-form-column">
          <div className="login-form-container">
            <h2 className="mb-4">Selamat Datang Kembali</h2>
            <p className="text-muted mb-4">
              Masuk untuk melanjutkan ke lelang keris.
            </p>

            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Alamat Email</Form.Label>
                <Form.Control type="email" placeholder="Masukkan email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <Form.Check type="checkbox" label="Ingat saya" />
                <Link to="/lupa-password">Lupa password?</Link>
              </div>

              <Button variant="dark" type="submit" className="w-100 mt-3">
                Login
              </Button>
            </Form>

            <div className="text-center mt-4">
              <p className="text-muted">
                Belum punya akun? <Link to="/daftar">Daftar di sini</Link>
              </p>
            </div>
          </div>
        </Col>

        <Col md={6} className="login-image-column d-none d-md-block"></Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
