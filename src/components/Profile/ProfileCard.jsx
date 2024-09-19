import React from 'react';
import { Card, Button, Image, Container } from 'react-bootstrap';
import '../../assets/css/Profile/ProfileCard.css';
import { Link } from 'react-router-dom';
import RoutePath from '../../routes/RoutePath';

function ProfileCard() {
  return (
    <Card className='card-custom'>
      <div className='image-container'>
        <Image
          src="https://cdn.oneesports.vn/cdn-data/sites/4/2024/01/Zed_38.jpg"
          roundedCircle
          className='profile-image'
        />
      </div>
      <Card.Body className='card-body-custom shadow rounded-top-3'>
        <Card.Title className='card-title-custom fw-medium'>
          Tran Hai Dang
        </Card.Title>
        <Card.Text className='card-text-custom fw-light'>
          <i className="bi bi-geo-alt"></i> Ngu Hanh Son, Da Nang, Viet Nam
        </Card.Text>

        <Card.Text className='accepting-text'>
        CHÀO ĐÓN KHÁCH
        </Card.Text>
        <Container className='buttons-container'>
          <Button variant="light" className='button-custom-edit button-custom'>
            <Link className='fw-light' to={RoutePath.EDITPROFILE}>Hồ sơ</Link>
          </Button>
          <Button className='button-custom-setting button-custom'>
            Cài đặt
          </Button>
        </Container>
      </Card.Body>
      <Card.Body className='card-body-bottom rounded-bottom-3'>
        <ul className='info-list fw-normal text-nowrap'>
          <li><i className="bi bi-person"></i> 22, Male</li>
          <li><i className="bi bi-geo-alt"></i> Ngu Hanh Son, Da Nang, Viet Nam</li>
          <li><i className="bi bi-building"></i> Đại học FPT Đà Nẵng</li>
          <li><i className="bi bi-translate"></i> English, Japanese</li>
          <li><i className="bi bi-check-circle"></i> Member since 2024</li>
          <li className='green-text'><i className="bi bi-shield-shaded"></i> Profile 65% complete</li>
        </ul>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;
