import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../../assets/css/Event/EventCard.css';
import { Link, useLocation } from 'react-router-dom';
import RoutePath from '../../routes/RoutePath';

const EventCard = ({ img, time, title, location, members, text }) => {
    const locationRoute = useLocation(); // Lấy thông tin route hiện tại

    // Xác định link nút dựa trên route hiện tại
    // const buttonLink = locationRoute.pathname === RoutePath.GROUPCREATED
    //     ? RoutePath.MYGROUPDETAIL
    //     : RoutePath.JOINGROUPDETAILS;

    // const isCreatedOrJoined = locationRoute.pathname === RoutePath.GROUPCREATED || locationRoute.pathname === RoutePath.GROUPJOINED;
    // const buttonText = isCreatedOrJoined ? 'Tương tác' : 'Tham gia';


    return (
        <Card className="eventlist-card">
            <Card.Img variant="top" src={img} className="event-card-image" />
            <Card.Body className='event-card-body'>
                <div className="location-and-members">
                    <span className='d-flex align-items-center'>
                        {/* <ion-icon name="time-outline" className="icon-margin"></ion-icon> */}
                        {time}
                    </span>
                    <span className="group-card-members">
                        <ion-icon name="people-outline" className="icon-margin"></ion-icon>
                        {members}
                    </span>
                </div>
                <Card.Title className='event-title'>{title}</Card.Title>

                <div className="event-card-info">
                    <span><i className='bi bi-geo-alt'></i> {location}</span>
                </div>
                <Button variant="success" className="btn-join">
                    <span className="btn-text">Tham gia</span>
                    <div className="icon-join">
                        <ion-icon name="chevron-forward-circle-outline"></ion-icon>
                    </div>
                </Button>
            </Card.Body>
        </Card>
    );
};

export default EventCard;
