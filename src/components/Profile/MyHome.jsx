import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../../assets/css/Profile/MyHome.css";

function MyHome() {
  return (
    <Container className='p-3 border rounded-3'>
      <h2 className="mb-4 text-success fw-bold"><i className="bi bi-house-door"></i> NHÀ CỦA TÔI</h2>

      <div className="mb-3 border rounded-3 cus-prioritize">
        <h5 className="mx-4 mt-3">ƯU TIÊN</h5>
        <div className="px-3">
          <p className="small ms-3">
            <i className="bi bi-person-check-fill"></i> Số lượng khách tối đa: 2
          </p>
          <p className="small ms-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gender-trans" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1.707L3.5 2.793l.646-.647a.5.5 0 1 1 .708.708l-.647.646.822.822A4 4 0 0 1 8 3c1.18 0 2.239.51 2.971 1.322L14.293 1H11.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-3.45 3.45A4 4 0 0 1 8.5 10.97V13H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V14H6a.5.5 0 0 1 0-1h1.5v-2.03a4 4 0 0 1-3.05-5.814l-.95-.949-.646.647a.5.5 0 1 1-.708-.708l.647-.646L1 1.707V3.5a.5.5 0 0 1-1 0zm5.49 4.856a3 3 0 1 0 5.02 3.288 3 3 0 0 0-5.02-3.288" />
            </svg> Giới tính tôi muốn đón: Bất kỳ
          </p>
          <p className="small ms-3">
            <i className="bi bi-ban"></i> Cho phép hút thuốc? Có
          </p>
        </div>
      </div>

      <div className="mb-3 border rounded-3 cus-home">
        <h5 className="mx-4 mt-3">NƠI TÁ TÚC</h5>
        <div className="px-3">
          <p className="small ms-3">
            <i className="bi bi-door-open"></i> Phòng đơn
          </p>
          <p className="small ms-5">
            Sofa in the living room or private room
          </p>
        </div>
      </div>

      <div className="mb-3 border rounded-3 cus-details">
        <h5 className="mx-4 mt-3">CHI TIẾT</h5>
        <div className="px-3">
          <h6 className="mx-3"><i className="bi bi-people-fill"></i> Bạn cùng phòng</h6>
          <p className="small ms-5">I live alone</p>

          <h6 className="mx-3"><i className="bi bi-link-45deg"></i> Tôi có thể chia sẻ gì với bạn?</h6>
          <p className="small ms-5">A place to sleep, free kitchen, free bathroom, wifi, my time and accompany</p>

          <h6 className="mx-3"><i className="bi bi-car-front"></i> Phương tiện di chuyển</h6>
          <p className="small ms-5">I have a bike</p>

          <h6 className="mx-3"><i className="bi bi-info-circle"></i> Thông tin bổ sung</h6>
          <p className="small ms-5">Feel free to ask me anything. Welcome!</p>
        </div>
      </div>

      <div className="mb-3 border rounded-3 cus-images">
        <h5 className="mx-4 mt-3 d-flex">HÌNH ẢNH NHÀ CỦA BẠN</h5>
        <Row className="px-3 py-3">
          <Col xs={12} md={4} className="mb-3">
            <img src="https://via.placeholder.com/300" alt="House 1" className="img-fluid rounded-3" />
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <img src="https://via.placeholder.com/300" alt="House 2" className="img-fluid rounded-3" />
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <img src="https://via.placeholder.com/300" alt="House 3" className="img-fluid rounded-3" />
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default MyHome;
