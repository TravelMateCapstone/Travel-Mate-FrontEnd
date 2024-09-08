import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Shared/Footer";
import NavBar from "../components/Shared/NavBar";
import "../assets/css/layouts/NewFeedLayout.css"; // Ensure you import your CSS for additional styles

function NewFeedLayout({ children }) {
  return (
    <Container fluid className="p-0">
      <NavBar />
      <Container style={{paddingTop: '100px'}}>
        <Row>
          {/* Column 1: You can add content later */}
          <Col md={2} className="bg-light px-3">
            {/* Placeholder for Column 1 */}
            <h1>Column 1</h1>
            <h1>Column 1</h1>
            <h1>Column 1</h1>
            <h1>Column 1</h1>
            <h1>Column 1</h1>
          </Col>

          {/* Column 2: You can add content later */}
          <Col md={6} className="px-3">
            {/* Placeholder for Column 2 */}
            Column 2
            {children}
          </Col>

          {/* Column 3: You can add content later */}
          <Col md={2} className="px-3">
            {/* Placeholder for Column 3 */}
            Column 3
          </Col>

          {/* Column 4: You can add content later */}
          <Col md={2} className="px-3">
            {/* Placeholder for Column 4 */}
            Column 4
          </Col>
        </Row>
  
      </Container>
    </Container>
  );
}

export default NewFeedLayout;
