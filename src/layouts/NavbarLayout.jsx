import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "../components/Shared/NavBar";

function NavbarLayout( {children}) {
  return (
    <Container fluid className="p-0">
      <Navbar />
      <Container fluid className="container-padding">
        {children}
      </Container>
    </Container>
  )
}

export default NavbarLayout