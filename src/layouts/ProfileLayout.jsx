import React from "react";
import { Container } from "react-bootstrap";
import "../assets/css/layouts/ProfileLayout.css";
import Footer from "../components/Shared/Footer";

function ProfileLayout({ children }) {
  return (
    <Container fluid>
      <div>Profile layout</div>
      {children}
      <Footer />
    </Container>
  );
}

export default ProfileLayout;
