import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/layouts/ProfileLayout.css";
import Footer from "../components/Shared/Footer";
import NavBar from "../components/Shared/NavBar";
import ProfileCard from "../components/Profile/ProfileCard";

function ProfileLayout({ children }) {
  return (
    <Container fluid className="p-0">
      <NavBar />
      <Container fluid className="container-profile">
        <Row>
          <Col xs={12} sm={4} md={4} lg={3} className="left-side">
            <ProfileCard />
          </Col>
  
          <Col xs={12} sm={8} md={8} lg={9}>
            {children}
          </Col>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
}

export default ProfileLayout;
