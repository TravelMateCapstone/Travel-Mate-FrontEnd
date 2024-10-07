import React from 'react';
import { Row, Col, Form, Button, Card, InputGroup } from 'react-bootstrap';
import '../../assets/css/Event/EventList.css';

function EventList() {
    const eventData = [
        {
            title: "Surfing Club",
            location: "Da Nang, Viet Nam",
            membersCount: 35,
            time: "10:00 AM - 2:00 PM",
            member: 35,
            description: "Our expert instructors and fun community will help you improve your skills and enjoy the ocean.",
            imageURL: "https://toquoc.mediacdn.vn/280518851207290880/2024/1/7/dsdgtdy-1704616308047440689926.jpg"
        },
        {
            title: "Yoga Retreat",
            location: "Hoi An, Viet Nam",
            membersCount: 20,
            time: "8:00 AM - 12:00 PM",
            member: 20,
            description: "Find your balance and peace with our rejuvenating yoga retreat program.",
            imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHoMev2VPeG81wrzcm0l7YanrC8N8rkApsCQ&s"
        },
        {
            title: "Mountain Biking Club",
            location: "Da Lat, Viet Nam",
            membersCount: 40,
            time: "9:00 AM - 3:00 PM",
            member: 40,
            description: "Join our adventurous group for mountain biking through breathtaking landscapes.",
            imageURL: "https://img.freepik.com/free-vector/music-event-poster-with-photo-2021_52683-42065.jpg"
        },
        {
            title: "Mountain Biking Club",
            location: "Da Lat, Viet Nam",
            membersCount: 40,
            time: "9:00 AM - 3:00 PM",
            member: 40,
            description: "Join our adventurous group for mountain biking through breathtaking landscapes.",
            imageURL: "https://img.freepik.com/free-vector/music-event-poster-with-photo-2021_52683-42065.jpg"
        },
        {
            title: "Mountain Biking Club",
            location: "Da Lat, Viet Nam",
            membersCount: 40,
            time: "9:00 AM - 3:00 PM",
            member: 40,
            description: "Join our adventurous group for mountain biking through breathtaking landscapes.",
            imageURL: "https://img.freepik.com/free-vector/music-event-poster-with-photo-2021_52683-42065.jpg"
        },
        {
            title: "Mountain Biking Club",
            location: "Da Lat, Viet Nam",
            membersCount: 40,
            time: "9:00 AM - 3:00 PM",
            member: 40,
            description: "Join our adventurous group for mountain biking through breathtaking landscapes.",
            imageURL: "https://img.freepik.com/free-vector/music-event-poster-with-photo-2021_52683-42065.jpg"
        },
        // Thêm các sự kiện khác
    ];

    const popularEventsData = [
        {
            title: "Surfing Club",
            location: "Da Nang, Viet Nam",
            membersCount: 35,
            time: "10:00 AM - 2:00 PM",
            member: 35,
            description: "Our expert instructors and fun community will help you improve your skills and enjoy the ocean.",
            imageURL: "https://toquoc.mediacdn.vn/280518851207290880/2024/1/7/dsdgtdy-1704616308047440689926.jpg"
        },
        {
            title: "Photography Workshop",
            location: "Ha Long Bay, Viet Nam",
            membersCount: 25,
            time: "1:00 PM - 5:00 PM",
            member: 25,
            description: "Capture stunning views and improve your photography skills in this workshop.",
            imageURL: "https://img.freepik.com/free-vector/music-event-poster-with-photo-2021_52683-42065.jpg"
        }
        // Thêm các sự kiện khác
    ];

    return (
        <Row className="eventlist">
            {/* Event List */}
            <Col xs={12} md={12} lg={8} className="event-list-section mx-auto">
                {/* Search and Filter UI */}
                <Row className="my-3 eventlist-search">
                    <Col md={8}>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                placeholder="Nhập tên nhóm cần tìm..."
                                className="eventlist-search-input"
                            />
                        </InputGroup>
                    </Col>
                    <Col md={2}>
                        <Form.Control type="text" placeholder="Địa điểm" className='eventlist-search-input' />
                    </Col>
                    <Col md={2}>
                        <Button variant="outline-secondary eventlist-search-input">
                            <i className="bi bi-funnel"></i> Lọc
                        </Button>
                    </Col>
                </Row>

                {/* Filter buttons */}
                <Row className="mb-3">
                    <Col>
                        <Button variant="outline-dark" className="me-2 eventlist-search-input">10km ✖</Button>
                        <Button variant="outline-dark" className="me-2 eventlist-search-input">Đã xác thực ✖</Button>
                        <Button variant="outline-dark" className="me-2 eventlist-search-input">Nam ✖</Button>
                        <Button variant="outline-dark" className="me-2 eventlist-search-input">18-25 tuổi ✖</Button>
                        <Button variant="link" className="text-success">Xóa tất cả</Button>
                    </Col>
                </Row>

                {/* Event Cards */}
                <Row>
                    {eventData.map((event, idx) => (
                        <Col xs={12} md={6} lg={4} className="mb-4" key={idx}>
                            <Card className="eventlist-card">
                                <Card.Img variant="top" src={event.imageURL} className="event-image" />
                                <Card.Body>
                                    <div className="location-and-members">
                                        <span><i className='bi bi-clock'></i> {event.time}</span>
                                        <span><i className='bi bi-person-circle'></i> {event.member}</span>
                                    </div>
                                    <Card.Title >{event.title}</Card.Title>

                                    <div className="location-and-members">
                                        <span><i className='bi bi-geo-alt'></i> {event.location}</span>
                                    </div>
                                    <Button variant="success" className="btn-join">
                                        <span className="btn-text">Tham gia</span>
                                        <div className="icon-join">
                                            <ion-icon name="chevron-forward-circle-outline"></ion-icon>
                                        </div>
                                    </Button>

                                    {/* Ẩn description */}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </Col>

            {/* Popular events */}
            <Col xs={12} md={12} lg={3} className='popular-event-section mx-3'>
                <h5 className='fontsize-popular'>Sự kiện nổi bật</h5>
                {popularEventsData.map((event, idx) => (
                    <Col xs={12} md={6} lg={12} key={idx}>
                        <Card className="eventlist-card popular-event-card mt-4">
                            <Card.Img variant="top" src={event.imageURL} className="event-image" />
                            <Card.Body>
                                <div className="location-and-members">
                                    <span><i className='bi bi-clock'></i> {event.time}</span>
                                    <span><i className='bi bi-person-circle'></i> {event.member}</span>
                                </div>
                                <Card.Title>{event.title}</Card.Title>
                                <div className="location-and-members">
                                    <span><i className='bi bi-geo-alt'></i> {event.location}</span>
                                </div>
                                <Button variant="success" className="btn-join">
                                    <span className="btn-text">Tham gia</span>
                                    <div className="icon-join">
                                        <ion-icon name="chevron-forward-circle-outline"></ion-icon>
                                    </div>
                                </Button>

                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Col>
        </Row>
    );
}

export default EventList;
