import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/actions/authActions';  // Import the loginSuccess action
import google from '../../assets/images/google.png';
import facebook from '../../assets/images/facebook.png';

const Login = ({ show, handleClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch(); // Hook to dispatch actions

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically check if the email and password are valid
    const userData = { email }; // Simplified: only storing the email for now
    
    // Dispatch login success action
    dispatch(loginSuccess(userData));

    // Close the modal after submission
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton style={{background: '#4763c8', color: 'white'}}>
        <Modal.Title>Đăng nhập</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Nhập email của bạn"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control
              type="password"
              placeholder="Nhập mật khẩu của bạn"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="btn-continue w-100 mt-3">
            Tiếp tục
          </Button>
          <div className="text-center mt-3">
            <p>hoặc</p>
            <Button variant="outline-dark" className="w-100 mb-2">
              <i className="fab fa-google"></i> Đăng nhập với Google <img src={google} alt="google icon" style={{width: '24px', height: '24px'}} />
            </Button>
            <Button variant="outline-dark" className="w-100">
              <i className="fab fa-facebook"></i> Đăng nhập với Facebook <img src={facebook} alt="facebook icon" style={{width: '24px', height: '24px'}}/>
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
