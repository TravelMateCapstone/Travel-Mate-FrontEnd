import React from 'react'

import { Card, Image, Container, Row, Col, Button } from 'react-bootstrap';

function Favorites() {
  return (

    <Container className='p-3' style={{ background: '#F3F6FF' }}>
      <h1 className="mb-4 text-success"><i class="bi bi-pin-map"></i> ĐỊA ĐIỂM ƯA THÍCH</h1>
      <Row>
        <Col md={6}>
          <Card className="p-3 mb-3">
            <div className="d-flex align-items-center">
              <Image
                src="https://cdn.oneesports.vn/cdn-data/sites/4/2024/01/Zed_38.jpg"
                className="me-3"
                style={{ width: '80px', height: '80px' }} // Điều chỉnh kích thước ảnh
              />
              <div className="w-100 d-flex justify-content-between">
                <div>
                  <Card.Title className="mb-0 fw-bold">Mikazuki</Card.Title>
                  <Card.Text>Lien Chieu, Da Nang</Card.Text>
                </div>
                <div>
                  <i className="bi bi-three-dots"></i>
                </div>
              </div>
            </div>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="p-3 mb-3">
            <div className="d-flex align-items-center">
              <Image
                src="https://cdn.oneesports.vn/cdn-data/sites/4/2024/01/Zed_38.jpg"
                className="me-3"
                style={{ width: '80px', height: '80px' }} // Điều chỉnh kích thước ảnh
              />
              <div className="w-100 d-flex justify-content-between">
                <div>
                  <Card.Title className="mb-0 fw-bold">Dragon Bridge</Card.Title>
                  <Card.Text>Hai Chau, Da Nang</Card.Text>
                </div>
                <div>
                  <i className="bi bi-three-dots"></i>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card className="p-3 mb-3">
            <div className="d-flex align-items-center">
              <Image
                src="https://cdn.oneesports.vn/cdn-data/sites/4/2024/01/Zed_38.jpg"
                className="me-3"
                style={{ width: '80px', height: '80px' }} // Điều chỉnh kích thước ảnh
              />
              <div className="w-100 d-flex justify-content-between">
                <div>
                  <Card.Title className="mb-0 fw-bold">Hoi An</Card.Title>
                  <Card.Text>Hoi An, Quang Nam</Card.Text>
                </div>
                <div>
                  <i className="bi bi-three-dots"></i>
                </div>
              </div>
            </div>
          </Card>
        </Col><Col md={6}>
          <Card className="p-3 mb-3">
            <div className="d-flex align-items-center">
              <Image
                src="https://cdn.oneesports.vn/cdn-data/sites/4/2024/01/Zed_38.jpg"
                className="me-3"
                style={{ width: '80px', height: '80px' }} // Điều chỉnh kích thước ảnh
              />
              <div className="w-100 d-flex justify-content-between">
                <div>
                  <Card.Title className="mb-0 fw-bold">Linh Ung Pogoda</Card.Title>
                  <Card.Text>Son Tra, Da Nang</Card.Text>
                </div>
                <div>
                  <i className="bi bi-three-dots"></i>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      {/* Center the button and remove background */}
      <div className="d-flex justify-content-center align-items-center mt-4">
        <Button className='border-0 p-2' style={{ backgroundColor: 'transparent', color: 'blue' }}>
          [+] Show more Destinations
        </Button>
      </div>
    </Container>
  )
}

export default Favorites