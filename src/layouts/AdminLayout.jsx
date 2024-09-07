import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/Shared/Footer";
import '../assets/css/layouts/AdminLayout.css'

function AdminLayout({ children }) {
  return (
    <Container fluid>
      <div>Admin layout config</div>
      {children}
      <Footer />
    </Container>
  );
}

export default AdminLayout;
