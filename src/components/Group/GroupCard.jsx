import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../../assets/css/Group/GroupCard.css';

const GroupCard = ({ img, title, location, members, text }) => {
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
        <Button variant="outline-success" className="group-card-button">
          <div></div>
          <div>Tham gia</div>
          <ion-icon name="chevron-forward-circle-outline" className="group-card-icon"></ion-icon>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default GroupCard;
