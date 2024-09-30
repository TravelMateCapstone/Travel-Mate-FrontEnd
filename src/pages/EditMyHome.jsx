import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import '../assets/css/Profile/EditMyHome.css';
import { Link } from 'react-router-dom';
import RoutePath from '../routes/RoutePath';

const MyHome = () => {
  return (
    <div className="p-4 edit-pro-container-myhome">
      <Form>
        {/* Title */}
        <div className="d-flex justify-content-start mb-4">
          <h5 className="me-4"><Link to={RoutePath.EDITPROFILE}>GIỚI THIỆU</Link></h5>
          <h5 className='text-success'>NHÀ CỦA TÔI</h5>
        </div>

        {/* Form Fields */}
        <Row className="mb-3 align-items-start" style={{ position: 'relative' }}>
          {/* Left Section */}
          <Col md={5}>
            <h5 className="text-danger">ƯU TIÊN</h5>
            <Form.Group controlId="maxGuests" className="mb-3">
              <Form.Label>Số lượng khách tối đa</Form.Label>
              <Form.Control type="text" placeholder="" className='label-small-form-myhome'/>
            </Form.Group>

            <Form.Group controlId="genderPreference" className="mb-3">
              <Form.Label>Giới tính tôi muốn đón</Form.Label>
              <Form.Control type="text" placeholder="" className='label-small-form-myhome' />
            </Form.Group>

            <Form.Group controlId="smokingAllowed" className="mb-3">
              <Form.Label>Cho phép hút thuốc</Form.Label>
              <Form.Control type="text" placeholder="" className='label-small-form-myhome'/>
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
              <Form.Label>Loại phòng</Form.Label>
              <Form.Control type="text" placeholder="" className='label-small-form-myhome' />
            </Form.Group>

            <Form.Group controlId="roomDescription" className="mb-3">
              <Form.Label>Mô tả phòng</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="" className='text-form-myhome-2' />
            </Form.Group>
          </Col>
        </Row>

        {/* Horizontal Divider */}
        <hr />

        {/* Additional Form Fields (Vertical Layout) */}
        <h5 className="text-danger">CHI TIẾT</h5>
        <Row>
          <Col md={12}>
            <Form.Group controlId="roommate" className="mb-3">
              <Form.Label>Bạn cùng phòng</Form.Label>
              <Form.Control type="text" placeholder="" className='label-small-form-myhome'/>
            </Form.Group>

            <Form.Group controlId="sharedItems" className="mb-3">
              <Form.Label className=''>Tôi có thể chia sẻ gì với bạn</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="" className='text-form-myhome' />
            </Form.Group>

            <Form.Group controlId="transportation" className="mb-3">
              <Form.Label>Phương tiện di chuyển</Form.Label>
              <Form.Control type="text" placeholder="" className='label-small-form-myhome'/>
            </Form.Group>

            <Form.Group controlId="additionalInfo" className="mb-3">
              <Form.Label className=''>Thông tin bổ sung</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="" className='text-form-myhome'/>
            </Form.Group>
          </Col>
        </Row>
    {/* Image Section */}
    <div className='display-form-myhome'>
    <h5 className="mt-4">Hình ảnh nhà của bạn</h5>
    <div className="d-flex justify-content-start mb-3">
              <button className="btn btn-outline-primary">Nhấn vào đây để upload</button>
    </div>
    </div>
    <div className="image-grid-container display-form-myhome">
  <img src="https://divui.com/blog/wp-content/uploads/2018/10/111111.jpg" alt="Image 1" className="img-thumbnail" />
  <img src="https://divui.com/blog/wp-content/uploads/2018/10/111111.jpg" alt="Image 2" className="img-thumbnail" />
  <img src="https://divui.com/blog/wp-content/uploads/2018/10/111111.jpg" alt="Image 3" className="img-thumbnail" />
  
 </div>
 <div className="image-grid-container display-form-myhome">
  <img src="https://divui.com/blog/wp-content/uploads/2018/10/111111.jpg" alt="Image 1" className="img-thumbnail" />
  <img src="https://divui.com/blog/wp-content/uploads/2018/10/111111.jpg" alt="Image 2" className="img-thumbnail" />
  <img src="https://divui.com/blog/wp-content/uploads/2018/10/111111.jpg" alt="Image 3" className="img-thumbnail" />
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
