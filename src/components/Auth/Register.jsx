import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import '../../assets/css/Auth/Register.css';
import google from '../../assets/images/google.png';
import facebook from '../../assets/images/facebook.png';

const Register = ({ show, handleClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Handle registration logic here (e.g., API call)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName="register-modal"
    >
      <Modal.Header className="modal-header-custom">
        <Modal.Title className="modal-title-centered fw-semibold">
          Đăng kí
        </Modal.Title>
        <Button className="modal-close-btn" onClick={handleClose}>
          x
        </Button>
      </Modal.Header>
      <Modal.Body>
        <Modal.Title className="modal-body-title fw-medium">
          Chào mừng đến với Travel Mate
        </Modal.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail" className="mt-3">
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control-custom"
              required
            />
          </Form.Group>
          <Form.Group controlId="formPassword" className="mt-2">
            <Form.Control
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control-custom"
              required
            />
          </Form.Group>

          <Form.Group controlId="formConfirmPassword" className="mt-2">
            <Form.Control
              type="password"
              placeholder="Xác nhận mật khẩu"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-control-custom"
              required
            />
          </Form.Group>

          <small className="fw-normal" style={{ fontSize: "12px" }}>
            Chúng tôi sẽ gửi tin nhắn đến email của bạn. Hãy làm theo hướng dẫn.
          </small>

          <Button
            variant="primary"
            type="submit"
            className="btn-continue w-100 mt-3 fw-bold"
          >
            Tiếp tục
          </Button>
          <div className="text-center-divider mt-3">
            <span>hoặc</span>
          </div>
          <div className="text-center mt-3">
            <Button variant="outline-dark" className="social-btn">
              <img src={google} alt="google icon" />
              <span>Đăng kí bằng Google</span>
            </Button>
            <Button variant="outline-dark" className="social-btn">
              <img src={facebook} alt="facebook icon" />
              <span>Đăng kí bằng Facebook</span>
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Register;
