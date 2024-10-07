import React from 'react';
import { Row, Col, Form, Button, Card, InputGroup } from 'react-bootstrap';
import '../../assets/css/Event/EventList.css';

function EventList() {
    return (
        <Row className="eventlist">
            {/* Group List */}
            <Col xs={12} md={12} lg={8} className="group-list-section mx-auto">
                {/* Search and Filter UI */}
                <Row className="my-3 grouplist-search">
                    <Col md={8}>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                placeholder="Nhập tên nhóm cần tìm..."
                                className="grouplist-search-input"
                            />
                        </InputGroup>
                    </Col>
                    <Col md={2}>
                        <Form.Control type="text" placeholder="Địa điểm" className='grouplist-search-input' />
                    </Col>
                    <Col md={2}>
                        <Button variant="outline-secondary grouplist-search-input">
                            <i class="bi bi-funnel"></i> Lọc
                        </Button>
                    </Col>
                </Row>

                {/* Filter buttons */}
                <Row className="mb-3">
                    <Col>
                        <Button variant="outline-dark" className="me-2 grouplist-search-input">10km ✖</Button>
                        <Button variant="outline-dark" className="me-2 grouplist-search-input">Đã xác thực ✖</Button>
                        <Button variant="outline-dark" className="me-2 grouplist-search-input">Nam ✖</Button>
                        <Button variant="outline-dark" className="me-2 grouplist-search-input">18-25 tuổi ✖</Button>
                        <Button variant="link" className="text-success">Xóa tất cả</Button>
                    </Col>
                </Row>

                {/* Group Cards */}
                <Row>
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <Col xs={12} md={6} lg={4} className="mb-4" key={idx}>
                            <Card className="grouplist-card">
                                {/* Updated Image with link */}
                                <Card.Img variant="top" src="https://toquoc.mediacdn.vn/280518851207290880/2024/1/7/dsdgtdy-1704616308047440689926.jpg" className="group-image" />
                                <Card.Body>
                                    <Card.Title>Surfing Club</Card.Title>
                                    {/* Location and members count */}
                                    <div className="location-and-members">
                                        <span><i className='bi bi-geo-alt'></i> Da Nang, Viet Nam</span>
                                        <span><i className='bi bi-person-circle'></i> 35 </span>
                                    </div>
                                    {/* Description */}
                                    <Card.Text className="description">
                                        Our expert instructors and fun community will help you improve your skills and enjoy the ocean.
                                    </Card.Text>
                                    <Button variant="success" className="btn-join">
                                        Tham gia
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Col>

            {/* Popular Groups */}
            <Col xs={12} md={12} lg={3} className='popular-group-section mx-3'>
                <h5 className='fontsize-popular'>Sự kiện nổi bật</h5>
                {Array.from({ length: 2 }).map((_, idx) => (
                    <Col xs={12} md={6} lg={12} key={idx}>
                        <Card className="grouplist-card popular-group-card mt-4">
                            <Card.Img variant="top" src="https://toquoc.mediacdn.vn/280518851207290880/2024/1/7/dsdgtdy-1704616308047440689926.jpg" className="group-image" />
                            <Card.Body>
                                <Card.Title>Surfing Club</Card.Title>
                                <div className="location-and-members">
                                    <span><i className='bi bi-geo-alt'></i> Da Nang, Viet Nam</span>
                                    <span><i className='bi bi-person-circle'></i> 35 thành viên</span>
                                </div>
                                <Card.Text className="description">
                                    Our expert instructors and fun community will help you improve your skills and enjoy the ocean.
                                </Card.Text>
                                <Button variant="success" className="btn-join">
                                    Tham gia
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
