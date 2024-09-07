import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/Shared/Footer";
import "../assets/css/layouts/NewFeedLayout.css";
import NavBar from "../components/Shared/NavBar";

function NewFeedLayout({ children }) {
  return (
    <Container fluid>
      <NavBar />
      <div>NewFeed layout</div>
      {children}
      <Footer />
    </Container>
  );
}

export default NewFeedLayout;
