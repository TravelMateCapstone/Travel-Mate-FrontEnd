import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NavBar from '../components/Shared/NavBar'

function ManageLayout({ children }) {
  return (
    <Container fluid className='p-0'>
        <NavBar/>
        <Container>
            <Row>
                <Col lg={3} md={3} >Sidebar</Col>
                <Col lg={9} md={9}>
                    {children}
                </Col>
            </Row>
        </Container>
    </Container>
  )
}

export default ManageLayout