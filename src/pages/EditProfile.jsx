import React from 'react';
import { Container, Form, Row, Col, Button, Badge } from 'react-bootstrap';
import '../assets/css/Profile/EditProfile.css'

const EditProfile = () => {
  return (
    <Container className="mt-4 edit-pro-container">
      <Form>
        {/* Title Section */}
        <div className="d-flex justify-content-start mb-4">
          <h5 className="text-success me-4">GIỚI THIỆU</h5>
          <h5>NHÀ CỦA TÔI</h5>
        </div>

        {/* Guest Status */}
        <Form.Group controlId="status" className="mb-3 display-form ">
          <Form.Label className='text-nowrap'>Tình trạng đón khách</Form.Label>
          <Form.Control type="text" className='label-middel-form'/>
        </Form.Group>

        {/* First horizontal divider */}
        <hr />

        {/* Two columns side by side */}
        <Row>
          {/* Left column: Nơi tôi sinh ra, Địa chỉ cư trú, Giáo dục */}
          <Col md={6}>
            <Form.Group controlId="birthplace" className="mb-3 display-form">
              <Form.Label className='text-nowrap' >Nơi tôi sinh ra</Form.Label>
              <Form.Control type="text" className='label-small-form' />
            </Form.Group>

            <Form.Group controlId="address" className="mb-3 display-form">
              <Form.Label className='text-nowrap'>Địa chỉ cư trú</Form.Label>
              <Form.Control type="text" className='label-small-form' />
            </Form.Group>

            <Form.Group controlId="education" className="mb-3 display-form">
              <Form.Label className='text-nowrap'>Giáo dục</Form.Label>
              <Form.Control type="text" className='label-small-form' />
            </Form.Group>
          </Col>

          {/* Vertical divider */}
          <Col md={1} className="d-flex justify-content-center align-items-center">
            <div style={{ borderLeft: '1px solid #ddd', height: '100%',}}></div>
          </Col>

          {/* Right column: Ngôn ngữ đã biết, Ngôn ngữ đang học */}
          <Col md={5}>
            <Form.Group controlId="knownLanguages" className="mb-3 display-form">
              <Form.Label className='text-nowrap'>Ngôn ngữ đã biết</Form.Label>
              <Form.Control type="text" className='label-small-form'/>
            </Form.Group>

            <Form.Group controlId="learningLanguages" className="mb-3 display-form">
              <Form.Label className='text-nowrap'>Ngôn ngữ đang học</Form.Label>
              <Form.Control type="text" className='label-small-form'/>
            </Form.Group>
          </Col>
        </Row>

        {/* Second horizontal divider */}
        <hr />

        {/* Bio Section */}
        <Form.Group controlId="bio" className="mb-3 ">
          <Form.Label>Giới thiệu</Form.Label>
          <Form.Control as="textarea" rows={3} className='text-form' />
        </Form.Group>

        {/* Why Use Travel Mate */}
        <Form.Group controlId="whyTravelMate" className="mb-3">
          <Form.Label>Tại sao tôi sử dụng Travel Mate</Form.Label>
          <Form.Control as="textarea" rows={3} className='text-form' />
        </Form.Group>

        {/* Hobbies Section */}
        <Form.Group controlId="hobbies" className="mb-3 ">
          <Form.Label >Sở thích</Form.Label>
          <div className="border rounded p-2" style={{ minHeight: '48px' }}>
            <Badge bg="light" text="dark" className="me-2">drawing</Badge>
            <Badge bg="light" text="dark" className="me-2">sport</Badge>
          </div>
        </Form.Group>

        {/* Music, Movies, Books Section */}
        <Form.Group controlId="musicMoviesBooks" className="mb-3">
          <Form.Label>Âm nhạc, phim ảnh & sách</Form.Label>
          <Form.Control as="textarea" rows={3}  className='text-form'/>
        </Form.Group>

        {/* Save and Cancel Buttons */}
        <div className="d-flex justify-content-end mt-4">
          <Button variant="success" className="me-2">Lưu thay đổi</Button>
          <Button variant="light">Hủy</Button>
        </div>
      </Form>
    </Container>
  );
};

export default EditProfile;

