import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../../assets/css/Group/GroupCard.css';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import RoutePath from '../../routes/RoutePath';

const GroupCard = ({ img, title, location, members, text }) => {
  const locationRoute = useLocation(); // Lấy thông tin route hiện tại

  // Xác định link nút dựa trên route hiện tại
  const buttonLink = locationRoute.pathname === RoutePath.GROUPCREATED 
    ? RoutePath.MYGROUPDETAIL 
    : RoutePath.JOINGROUPDETAILS;

    const isCreatedOrJoined = locationRoute.pathname === RoutePath.GROUPCREATED || locationRoute.pathname === RoutePath.GROUPJOINED;
    const buttonText = isCreatedOrJoined ? 'Tương tác' : 'Tham gia';


  return (
    <Card className="group-card">
      <Card.Img
        variant="top"
        src={img}
        className="group-card-img"
      />
      <Card.Body className="group-card-body">
        <Card.Title className='group-name'>{title}</Card.Title>
        <div className="group-card-info">
          <span className='d-flex align-items-center'>
            <ion-icon name="location-outline" className="icon-margin"></ion-icon>
            {location}
          </span>
          <span className="group-card-members">
            <ion-icon name="people-outline" className="icon-margin"></ion-icon>
            {members}
          </span>
        </div>
        <Card.Text className="group-card-text">
          {text}
        </Card.Text>
        <Button as={Link} to={buttonLink} variant="outline-success" className="group-card-button">
          <div></div>
          <div>{buttonText}</div>
          <ion-icon name="chevron-forward-circle-outline" className="group-card-icon"></ion-icon>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default GroupCard;
