import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/actions/authActions"; // Import the loginSuccess action
import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";
import "../../assets/css/Auth/Login.css"; // Import CSS file

const Login = ({ show, handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    <Modal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName="custom-modal"
    >
      <Modal.Header className="modal-header">
        <Modal.Title className="modal-title-centered fw-semibold">
          Đăng nhập
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
          <Form.Group controlId="formEmail" className="form-email">
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              required
            />
          </Form.Group>
          <Form.Group controlId="formPassword" className="form-password">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <small className="fw-normal small-text">
            Vui lòng kiểm tra email và làm theo hướng dẫn để xác minh địa chỉ
            của bạn
          </small>

          <Button variant="primary" type="submit" className="btn-continue w-100 mt-3 fw-bold">
            Tiếp tục
          </Button>
          <div className="text-center-divider mt-3">
            <span>hoặc</span>
          </div>
          <div className="text-center mt-3">
            <Button variant="outline-dark" className="social-btn">
              <img src={google} alt="google icon" />
              <span>Đăng nhập bằng Google</span>
            </Button>
            <Button variant="outline-dark" className="social-btn">
              <img src={facebook} alt="facebook icon" />
              <span>Đăng nhập bằng Facebook</span>
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
