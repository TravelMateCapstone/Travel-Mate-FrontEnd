import React from 'react';
import { Card, Image, Container, Row, Col, Button } from 'react-bootstrap';

function Friends() {
  return (
    <Container className='p-3' style={{ background: '#F3F6FF' }}>
      <Row>
        <Col md={6}>
          <Card className="p-3 mb-3">
            <div className="d-flex align-items-center">
              <Image
                src="https://cdn.oneesports.vn/cdn-data/sites/4/2024/01/Zed_38.jpg"
                roundedCircle
                className='me-3'
                style={{ width: '80px', height: '80px' }} // Điều chỉnh kích thước ảnh
              />
              <div>
                <Card.Title className='mb-0 fw-bold'>Nhon Tran</Card.Title>
                <Card.Text>Dien Ngoc, Quang Nam</Card.Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-3 mb-3">
            <div className="d-flex align-items-center">
              <Image
                src="https://cdn.oneesports.vn/cdn-data/sites/4/2024/01/Zed_38.jpg"
                roundedCircle
                className='me-3'
                style={{ width: '80px', height: '80px' }} // Điều chỉnh kích thước ảnh
              />
              <div>
                <Card.Title className='mb-0 fw-bold'>Nhon Tran</Card.Title>
                <Card.Text>Dien Ngoc, Quang Nam</Card.Text>
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
                roundedCircle
                className='me-3'
                style={{ width: '80px', height: '80px' }} // Điều chỉnh kích thước ảnh
              />
              <div>
                <Card.Title className='mb-0 fw-bold'>Nhon Tran</Card.Title>
                <Card.Text>Dien Ngoc, Quang Nam</Card.Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-3 mb-3">
            <div className="d-flex align-items-center">
              <Image
                src="https://cdn.oneesports.vn/cdn-data/sites/4/2024/01/Zed_38.jpg"
                roundedCircle
                className='me-3'
                style={{ width: '80px', height: '80px' }} // Điều chỉnh kích thước ảnh
              />
              <div>
                <Card.Title className='mb-0 fw-bold'>Nhon Tran</Card.Title>
                <Card.Text>Dien Ngoc, Quang Nam</Card.Text>
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
                roundedCircle
                className='me-3'
                style={{ width: '80px', height: '80px' }} // Điều chỉnh kích thước ảnh
              />
              <div>
                <Card.Title className='mb-0 fw-bold'>Nhon Tran</Card.Title>
                <Card.Text>Dien Ngoc, Quang Nam</Card.Text>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-3 mb-3">
            <div className="d-flex align-items-center">
              <Image
                src="https://cdn.oneesports.vn/cdn-data/sites/4/2024/01/Zed_38.jpg"
                roundedCircle
                className='me-3'
                style={{ width: '80px', height: '80px' }} // Điều chỉnh kích thước ảnh
              />
              <div>
                <Card.Title className='mb-0 fw-bold'>Nhon Tran</Card.Title>
                <Card.Text>Dien Ngoc, Quang Nam</Card.Text>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      {/* Center the button and remove background */}
      <div className="d-flex justify-content-center align-items-center mt-4">
        <Button className='border-0 p-2' style={{ backgroundColor: 'transparent', color: 'blue' }}>
          [+] Show more friends
        </Button>
      </div>
    </Container>
  );
}

export default Friends;
