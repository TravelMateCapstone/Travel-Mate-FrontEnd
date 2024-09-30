import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import '../assets/css/Profile/EditMyHome.css';

const MyHome = () => {
  return (
    <div className="p-4 edit-pro-container-myhome">
      <Form>
        {/* Title */}
        <div className="d-flex justify-content-start mb-4 ">
          <h5 className="text-success me-4">GIỚI THIỆU</h5>
          <h5>NHÀ CỦA TÔI</h5>
        </div>

        {/* Form Fields */}
        <Row className="mb-3 align-items-start" style={{ position: 'relative' }}>
          {/* Left Section */}
          <Col md={5}>
            <h5 className="text-danger fw-medium">ƯU TIÊN</h5>
            <Form.Group controlId="maxGuests" className="mb-3">
              <Form.Label className='fw-medium'>Số lượng khách tối đa</Form.Label>
              <Form.Control type="text" placeholder="10"  className='label-small-form-myhome' />
            </Form.Group>

            <Form.Group controlId="genderPreference" className="mb-3">
              <Form.Label className='fw-medium'>Giới tính tôi muốn đón</Form.Label>
              <Form.Control type="text" placeholder="" className='label-small-form-myhome' />
            </Form.Group>

            <Form.Group controlId="smokingAllowed" className="mb-3">
              <Form.Label className='fw-medium'>Cho phép hút thuốc</Form.Label>
              <Form.Control type="text" placeholder="" className='label-small-form-myhome' />
            </Form.Group>
          </Col>

          {/* Vertical Divider */}
          <Col md={1} className="d-flex justify-content-center align-items-center">
            <div style={{ borderLeft: '1px solid #ddd', height: '100%' }}></div>
          </Col>

          {/* Right Section */}
          <Col md={6}>
            <h5 className="text-danger">NƠI TÁ TÚC</h5>
            <Form.Group controlId="roomType" className="mb-3">
              <Form.Label className='fw-medium'>Loại phòng</Form.Label>
              <Form.Control type="text" placeholder="" className='label-small-form-myhome' />
            </Form.Group>

            <Form.Group controlId="roomDescription" className="mb-3">
              <Form.Label className='fw-medium'>Mô tả phòng</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="" className='text-form-myhome-2' />
            </Form.Group>
          </Col>
        </Row>

        {/* Horizontal Divider */}
        <hr />

        {/* Additional Form Fields (Vertical Layout) */}
        <h5 className="text-danger fw-medium">CHI TIẾT</h5>
        <Row>
          <Col md={12}>
            <Form.Group controlId="roommate" className="mb-3">
              <Form.Label className='fw-medium'>Bạn cùng phòng</Form.Label>
              <Form.Control type="text" placeholder="" className='label-small-form-myhome' />
            </Form.Group>

            <Form.Group controlId="sharedItems" className="mb-3">
              <Form.Label className='fw-medium'>Tôi có thể chia sẻ gì với bạn</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="" className='text-form-myhome' />
            </Form.Group>

            <Form.Group controlId="transportation" className="mb-3">
              <Form.Label className='fw-medium'>Phương tiện di chuyển</Form.Label>
              <Form.Control type="text" placeholder="" className='label-small-form-myhome' />
            </Form.Group>

            <Form.Group controlId="additionalInfo" className="mb-3">
              <Form.Label className='fw-medium'>Thông tin bổ sung</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="" className='text-form-myhome' />
            </Form.Group>
          </Col>
        </Row>
        {/* Image Section */}
        <div className='display-form-myhome mt-4' >
          <h5 className=" fw-medium image-tiltle">Hình ảnh nhà của bạn</h5>
          <div className="d-flex justify-content-start">
            <button className="btn btn-outline-primary">Nhấn vào đây để upload</button>
          </div>
        </div>
        <div className="container">
          <div className='row'>
          <div className='col col-lg-4 col-md-6 col-6  image-grid-container'>
            <div className='img-thumbnail'>
            <img src='https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA' alt='image-profile'></img>
            </div>
          </div>
          <div className='col col-lg-4  col-md-6 col-6  image-grid-container'>
            <div className='img-thumbnail'>
            <img src='https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA' alt='image-profile'></img>
            </div>
          </div>
          <div className='col col-lg-4 col-md-6 col-6 image-grid-container'>
            <div className='img-thumbnail'>
            <img src='https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA' alt='image-profile'></img>
            </div>
          </div>
          <div className='col col-lg-4 col-md-6 col-6 image-grid-container'>
            <div className='img-thumbnail'>
            <img src='https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA' alt='image-profile'></img>
            </div>
          </div>
          <div className='col col-lg-4 col-md-6 col-6 image-grid-container'>
            <div className='img-thumbnail'>
            <img src='https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA' alt='image-profile'></img>
            </div>
          </div>
          <div className='col col-lg-4 col-md-6 col-6 image-grid-container'>
            <div className='img-thumbnail'>
            <img src='https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA' alt='image-profile'></img>
            </div>
          </div>
          </div>
        </div>


        {/* Save/Cancel Buttons */}
        <div className="d-flex justify-content-end mt-4">
          <Button variant="success" className="me-2">Lưu thay đổi</Button>
          <Button variant="secondary">Hủy</Button>
        </div>
      </Form>
    </div>
  );
};

export default MyHome;
