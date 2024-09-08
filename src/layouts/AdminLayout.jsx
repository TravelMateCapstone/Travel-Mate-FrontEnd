import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/Shared/Footer";
import '../assets/css/layouts/AdminLayout.css'
import NavBar from "../components/Shared/NavBar";

function AdminLayout({ children }) {
  return (
    <Container fluid>
      <NavBar />
      <Container>{children}</Container>
      <Footer />
    </Container>
  );
}

export default AdminLayout;
