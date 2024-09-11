import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/actions/authActions"; // Import the loginSuccess action
import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";
import "../../assets/css/Auth/Login.css";

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
      <Modal.Header
        style={{
          color: "black",
          height: "77px",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          borderBottom: "1px solid #8C8B8B",
          display: "flex", // Sử dụng Flexbox
          justifyContent: "center", // Căn giữa nội dung theo chiều ngang
          alignItems: "center", // Căn giữa nội dung theo chiều dọc
          position: "relative", // Để giữ nút close ở vị trí đúng
        }}
      >
        <Modal.Title className="fw-semibold"
          style={{
            position: "absolute", // Giữ nút close trong cùng dòng tiêu đề
            left: "50%",
            transform: "translateX(-50%)", // Dịch chuyển chữ ra giữa
          }}
        >
          Đăng nhập
        </Modal.Title>
        {/* Nút Close tùy chỉnh */}
        <Button
          onClick={handleClose}
          style={{
            position: "absolute",
            right: "15px", // Đặt nút ở góc phải
            top: "15px",
            background: "transparent",
            border: "none",
            fontSize: "18px", // Tùy chỉnh kích thước
            fontWeight: "bold", // Tùy chỉnh độ đậm
            color: "#000", // Màu của dấu 'X'
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
              placeholder="Password"
              value={password}
              style={{ fontSize: "12px", height: "50px", borderRadius: "10px" }}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <small className="fw-normal" style={{ fontSize: "12px" }}>
            Vui lòng kiểm tra email và làm theo hướng dẫn để xác minh địa chỉ
            của bạn
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
              <span className="mx-auto fw-bold" style={{fontSize: '12px'}}>Đăng nhập bằng Google</span>
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
              <span className="mx-auto fw-bold" style={{fontSize: '12px'}}>Đăng nhập bằng Facebook</span>
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
