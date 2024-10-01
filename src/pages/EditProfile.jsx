import React from 'react';
import { Container, Form, Row, Col, Button, Badge } from 'react-bootstrap';
import '../assets/css/Profile/EditProfile.css';
import { Link } from 'react-router-dom';
const EditProfile = () => {
  return (
    <Container className="mt-4 edit-pro-container">
      <Form>
        {/* Phần tiêu đề */}
        <div className="d-flex justify-content-start mb-4 ">
          <h5 className="text-success me-4">GIỚI THIỆU</h5>
          <h5 className=''><Link to={'/editmyhome'}>NHÀ CỦA TÔI</Link></h5>
        </div>

        {/* Trạng thái đón khách */}
        <Form.Group as={Row} controlId="status" className="mb-3 align-items-center">
          <Form.Label column sm={3} className='text-nowrap fw-medium customer-status'>
            Tình trạng đón khách
          </Form.Label>
          <Col sm={9}>
            <Form.Control type="text" className='text-form-info'/>
          </Col>
        </Form.Group>

        {/* Dòng phân cách */}
        <hr />

        {/* Hai cột song song với dấu gạch đứng chia đôi */}
        <Row>
          {/* Cột bên trái */}
          <Col md={6} className="pe-md-4 border-end">
            <Form.Group as={Row} controlId="birthplace" className="mb-3 align-items-center">
              <Form.Label column sm={6} className='text-nowrap fw-medium'>
                Nơi tôi sinh ra
              </Form.Label>
              <Col sm={6}>
                <Form.Control type="text"  className='text-form-info'/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="address" className="mb-3 align-items-center">
              <Form.Label column sm={6} className='text-nowrap fw-medium'>
                Địa chỉ cư trú
              </Form.Label>
              <Col sm={6}>
                <Form.Control type="text" className='text-form-info'/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="education" className="mb-3 align-items-center">
              <Form.Label column sm={6} className='text-nowrap fw-medium'>
                Giáo dục
              </Form.Label>
              <Col sm={6}>
                <Form.Control type="text" className='text-form-info'/>
              </Col>
            </Form.Group>
          </Col>

          {/* Cột bên phải */}
          <Col md={6} className="ps-md-4">
            <Form.Group as={Row} controlId="knownLanguages" className="mb-3 align-items-center">
              <Form.Label column sm={6} className='text-nowrap fw-medium'>
                Ngôn ngữ đã biết
              </Form.Label>
              <Col sm={6}>
                <Form.Control type="text" className='text-form-info'/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="learningLanguages" className="mb-3 align-items-center">
              <Form.Label column sm={6} className='text-nowrap fw-medium'>
                Ngôn ngữ đang học
              </Form.Label>
              <Col sm={6}>
                <Form.Control type="text" className='text-form-info'/>
              </Col>
            </Form.Group>
          </Col>
        </Row>

        {/* Dòng phân cách */}
        <hr />

         {/* Bio Section */}
         <Form.Group controlId="bio" className="mb-3 ">
          <Form.Label>Giới thiệu</Form.Label>
          <Form.Control as="textarea" rows={3} className='text-form text-decription' />
        </Form.Group>

        {/* Why Use Travel Mate */}
        <Form.Group controlId="whyTravelMate" className="mb-3">
          <Form.Label>Tại sao tôi sử dụng Travel Mate</Form.Label>
          <Form.Control as="textarea" rows={3} className='text-form text-decription' />
        </Form.Group>

        {/* Hobbies Section */}
        <Form.Group controlId="hobbies" className="mb-3 ">
          <Form.Label >Sở thích</Form.Label>
          <div className="border rounded p-2" style={{ minHeight: '48px' }}>
            <Badge bg="light" text="dark" className="me-2 badge-custom">drawing</Badge>
            <Badge bg="light" text="dark" className="me-2 badge-custom">sport</Badge>
          </div>
        </Form.Group>

        {/* Music, Movies, Books Section */}
        <Form.Group controlId="musicMoviesBooks" className="mb-3">
          <Form.Label>Âm nhạc, phim ảnh & sách</Form.Label>
          <Form.Control as="textarea" rows={3}  className='text-form text-decription'/>
        </Form.Group>
        {/* Nút lưu và hủy */}
        <div className="d-flex justify-content-end mt-4">
          <Button variant="success" className="me-2 fw-medium">Lưu thay đổi</Button>
          <Button variant="light" className='fw-medium'>Hủy</Button>
        </div>
      </Form>
    </Container>
  );
};

export default EditProfile;
