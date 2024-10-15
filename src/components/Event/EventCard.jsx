import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../../assets/css/Event/EventCard.css';
import { Link, useLocation } from 'react-router-dom';
import RoutePath from '../../routes/RoutePath';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { useNavigate } from 'react-router-dom';
import { viewEvent } from '../../redux/actions/eventActions';  // Đảm bảo đường dẫn tới file actions chính xác


const EventCard = ({ img, time, title, location, members, text }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();  // Sử dụng useNavigate

    const handleJoinEvent = () => {
        const eventDetails = { img, time, title, location, members, text };
        dispatch(viewEvent(eventDetails));

        // Điều hướng sau khi dispatch
        navigate(RoutePath.JOINEVENTDETAILS);
    };


    return (
        <Card className="eventlist-card">
            <Card.Img variant="top" src={img} className="event-card-image" />
            <Card.Body className='event-card-body'>
                <div className="location-and-members">
                    <span className='d-flex align-items-center'>
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
                <Button
                    variant="outline-success"
                    className="btn-join"
                    onClick={handleJoinEvent}  // Gọi hàm handleJoinEvent
                >
                    <div>Tham gia</div>
                    <div className="icon-join">
                        <ion-icon name="chevron-forward-circle-outline"></ion-icon>
                    </div>
                </Button>
                {/* <Button
                    variant="outline-success"
                    className="btn-join"
                    as={Link}
                    to={buttonLink}
                    onClick={handleJoinEvent}
                >
                    <div>{buttonText}</div>
                    <div className="icon-join">
                        <ion-icon name="chevron-forward-circle-outline"></ion-icon>
                    </div>
                </Button> */}
            </Card.Body>
        </Card >
    );
};

export default EventCard;
