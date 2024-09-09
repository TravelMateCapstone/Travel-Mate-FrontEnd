// Login.jsx
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../../assets/css/Auth/Login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., API call or authentication)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Row className="w-100">
        <Col xs={12} md={6} className="mx-auto">
          <div className="border p-4 shadow rounded">
            <h3 className="text-center mb-4">Login</h3>
            <p className="text-center">Welcome to Travel Mate</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mt-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <p className="mt-3 text-center">
                We will send you a message to confirm your email address. Please follow the instructions in the email to complete the verification process.
              </p>

              <Button variant="primary" type="submit" className="w-100 mt-3">
                Continue
              </Button>
            </Form>

            <div className="text-center mt-3">
              <p>or</p>
              <Button variant="outline-dark" className="w-100 mb-2">
                <i className="fab fa-google"></i> Login with Google
              </Button>
              <Button variant="outline-dark" className="w-100">
                <i className="fab fa-facebook"></i> Login with Facebook
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
