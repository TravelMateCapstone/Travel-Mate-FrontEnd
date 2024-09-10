import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import '../../assets/css/Auth/Register.css';
import google from '../../assets/images/google.png'
import facebook from '../../assets/images/facebook.png'

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
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton style={{background: '#4763c8', color: 'white'}}>
        <Modal.Title>Đăng kí</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formConfirmPassword" className="mt-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Xác nhận mật khẩu"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Form.Group>

          <p className="mt-3 text-center">
            Chúng tôi sẽ gửi đoạn tin nhắn đến email của bạn. <br/> Hãy làm theo hướng dẫn được viết.
          </p>

          <Button variant="primary" type="submit" className="btn-continue w-100 mt-3" style={{background: '#4763c8 !important;'}}>
            Tiếp tục
          </Button>
        </Form>

        <div className="text-center mt-3">
          <p>hoặc</p>
          <Button variant="outline-dark" className="w-100 mb-2">
            <i className="fab fa-google"></i> Đăng kí với Google <img src={google} alt="google icon" style={{width: '24px', height: '24px'}} />
          </Button>
          <Button variant="outline-dark" className="w-100">
            <i className="fab fa-facebook"></i> Đăng kí với Facebook <img src={facebook} alt="facebook icon" style={{width: '24px', height: '24px'}} />
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Register;
