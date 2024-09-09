import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Shared/Footer";
import NavBar from "../components/Shared/NavBar";
import "../assets/css/layouts/NewFeedLayout.css"; 

function NewFeedLayout({ children }) {
  return (
    <Container fluid className="p-0">
      <NavBar />
      <Container fluid style={{ paddingTop: '80px' }}>
        <Row>
          {/* Column 1 - Hidden on screens smaller than 'md' */}
          <Col md={2} className="column-1 bg-primary d-none d-md-block">
            Column 1
          </Col>

          {/* Column 2 - Always visible */}
          <Col md={6} className="column-2 bg-light">
            Column 2
            {children}
          </Col>

          {/* Column 3 - Hidden on screens smaller than 'md' */}
          <Col md={2} className="column-3 bg-info d-none d-md-block">
            Column 3
          </Col>

          {/* Column 4 - Hidden on screens smaller than 'md' */}
          <Col md={2} className="column-4 bg-danger d-none d-md-block">
            Column 4
          </Col>
        </Row>
        <Footer />
      </Container>
    </Container>
  );
}

export default NewFeedLayout;
