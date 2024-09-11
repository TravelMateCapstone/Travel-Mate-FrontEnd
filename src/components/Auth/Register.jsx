import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import '../../assets/css/Auth/Register.css';
import google from '../../assets/images/google.png';
import facebook from '../../assets/images/facebook.png';
import '../../assets/css/Auth/Register.css'

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
      <Modal.Header
        style={{
          color: "black",
          height: "77px",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          borderBottom: "1px solid #8C8B8B",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Modal.Title className="fw-semibold"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          Đăng kí
        </Modal.Title>
        <Button
          onClick={handleClose}
          style={{
            position: "absolute",
            right: "15px",
            top: "15px",
            background: "transparent",
            border: "none",
            fontSize: "18px",
            fontWeight: "bold",
            color: "#000",
            cursor: "pointer",
          }}
        >
          x
        </Button>
      </Modal.Header>
      <Modal.Body>
        <Modal.Title style={{ fontSize: "20px"}} className="fw-medium">
          Chào mừng đến với Travel Mate
        </Modal.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group
            controlId="formEmail"
            style={{ marginTop: "20px", height: "50px" }}
          >
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ fontSize: "12px", height: "50px", borderRadius: "10px" }}
              required
            />
          </Form.Group>
          <Form.Group controlId="formPassword" style={{ marginTop: "14px" }}>
            <Form.Control
              type="password"
              placeholder="Mật khẩu"
              value={password}
              style={{ fontSize: "12px", height: "50px", borderRadius: "10px" }}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formConfirmPassword" style={{ marginTop: "14px" }}>
            <Form.Control
              type="password"
              placeholder="Xác nhận mật khẩu"
              value={confirmPassword}
              style={{ fontSize: "12px", height: "50px", borderRadius: "10px" }}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
            style={{ fontSize: "12px", borderRadius: '10px', height: '36px' }}
          >
            Tiếp tục
          </Button>
          <div className="text-center-divider mt-3">
            <span style={{ fontSize: "8px", fontWeight: "bold" }}>hoặc</span>
          </div>
          <div className="text-center mt-3">
            <Button
              variant="outline-dark"
              className="w-100 mb-2 d-flex align-items-center justify-content-start"
              style={{borderRadius: '10px'}}
            >
              <img
                src={google}
                alt="google icon"
                style={{ width: "24px", height: "24px", marginRight: "10px" }}
              />
              <span className="mx-auto fw-bold" style={{fontSize: '12px'}}>Đăng kí bằng Google</span>
            </Button>
            <Button
              variant="outline-dark"
              className="w-100 d-flex align-items-center justify-content-start"
              style={{borderRadius: '10px'}}
            >
              <img
                src={facebook}
                alt="facebook icon"
                style={{ width: "24px", height: "24px", marginRight: "10px" }}
              />
              <span className="mx-auto fw-bold" style={{fontSize: '12px'}}>Đăng kí bằng Facebook</span>
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Register;
