import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "../components/Shared/NavBar";
import Footer from "../components/Shared/Footer";
import '../assets/css/layouts/DefaultLayout.css'

function DefaultLayout({ children }) {
  return (
    <Container fluid className="p-0">
      <Navbar />
      <Container style={{paddingTop: '80px'}}>
        <div>DefaultLayout</div>
        {children}
      </Container>
      <Footer />
    </Container>
  );
}

export default DefaultLayout;
