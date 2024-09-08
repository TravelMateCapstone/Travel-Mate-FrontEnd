import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/Shared/Footer";
import "../assets/css/layouts/NewFeedLayout.css";
import NavBar from "../components/Shared/NavBar";

function NewFeedLayout({ children }) {
  return (
    <Container fluid className="p-0">
      <NavBar />
      <Container fluid>
        <div>NewFeed layout</div>
        {children}
      </Container>
      <Footer />
    </Container>
  );
}

export default NewFeedLayout;
