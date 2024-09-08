import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/layouts/ProfileLayout.css";
import Footer from "../components/Shared/Footer";
import NavBar from "../components/Shared/NavBar";

function ProfileLayout({ children }) {
  return (
    <Container fluid className="p-0">
      <NavBar />
      <Container fluid>
        <Row>
          <Col xs={12} sm={4} md={3}>
            <div>Sidebar content</div>
          </Col>
  
          <Col xs={12} sm={8} md={9}>
            {children}
          </Col>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
}

export default ProfileLayout;
