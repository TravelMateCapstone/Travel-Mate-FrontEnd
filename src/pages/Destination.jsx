import React from "react";
import "../assets/css/Destination/Destination.css";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import InfoUser from "../components/Destination/InfoUser";
import house from "../assets/images/house.gif";
import fire from "../assets/images/fire.gif";
import bestFriend from "../assets/images/best-friends.gif";
import event from "../assets/images/events.gif";
import EventCard from "../components/Destination/EventCard";
function Destination() {
  const users = [
    { name: "Nhơn Trần", avatar: "https://via.placeholder.com/70" },
    { name: "Lan Phạm", avatar: "https://via.placeholder.com/70" },
    { name: "Minh Lê", avatar: "https://via.placeholder.com/70" },
    { name: "Huy Nguyễn", avatar: "https://via.placeholder.com/70" },
    { name: "Trúc Linh", avatar: "https://via.placeholder.com/70" },
    { name: "Khoa Bùi", avatar: "https://via.placeholder.com/70" },
  ];

  const events = [
    {
      eventImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fMcbxmz-x_NAc-ozHPo7o2pRwFOWW2y3bQ&s",
      eventName: "Vietnamese street foods",
      eventTime: "Thứ bảy hàng tuần lúc 3:00 PM",
      participants: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fMcbxmz-x_NAc-ozHPo7o2pRwFOWW2y3bQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fMcbxmz-x_NAc-ozHPo7o2pRwFOWW2y3bQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fMcbxmz-x_NAc-ozHPo7o2pRwFOWW2y3bQ&s",
      ],
    },
    {
      eventImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fMcbxmz-x_NAc-ozHPo7o2pRwFOWW2y3bQ&s",
      eventName: "Cultural Exchange",
      eventTime: "Chủ nhật hàng tuần lúc 4:00 PM",
      participants: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fMcbxmz-x_NAc-ozHPo7o2pRwFOWW2y3bQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fMcbxmz-x_NAc-ozHPo7o2pRwFOWW2y3bQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fMcbxmz-x_NAc-ozHPo7o2pRwFOWW2y3bQ&s",
      ],
    },
    {
      eventImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fMcbxmz-x_NAc-ozHPo7o2pRwFOWW2y3bQ&s",
      eventName: "Vietnamese street foods",
      eventTime: "Thứ bảy hàng tuần lúc 3:00 PM",
      participants: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fMcbxmz-x_NAc-ozHPo7o2pRwFOWW2y3bQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fMcbxmz-x_NAc-ozHPo7o2pRwFOWW2y3bQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fMcbxmz-x_NAc-ozHPo7o2pRwFOWW2y3bQ&s",
      ],
    },
    {
      eventImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fMcbxmz-x_NAc-ozHPo7o2pRwFOWW2y3bQ&s",
      eventName: "Cultural Exchange",
      eventTime: "Chủ nhật hàng tuần lúc 4:00 PM",
      participants: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fMcbxmz-x_NAc-ozHPo7o2pRwFOWW2y3bQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fMcbxmz-x_NAc-ozHPo7o2pRwFOWW2y3bQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fMcbxmz-x_NAc-ozHPo7o2pRwFOWW2y3bQ&s",
      ],
    },
    {
      eventImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fMcbxmz-x_NAc-ozHPo7o2pRwFOWW2y3bQ&s",
      eventName: "Vietnamese street foods",
      eventTime: "Thứ bảy hàng tuần lúc 3:00 PM",
      participants: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fMcbxmz-x_NAc-ozHPo7o2pRwFOWW2y3bQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fMcbxmz-x_NAc-ozHPo7o2pRwFOWW2y3bQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fMcbxmz-x_NAc-ozHPo7o2pRwFOWW2y3bQ&s",
      ],
    },
    {
      eventImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fMcbxmz-x_NAc-ozHPo7o2pRwFOWW2y3bQ&s",
      eventName: "Cultural Exchange",
      eventTime: "Chủ nhật hàng tuần lúc 4:00 PM",
      participants: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fMcbxmz-x_NAc-ozHPo7o2pRwFOWW2y3bQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fMcbxmz-x_NAc-ozHPo7o2pRwFOWW2y3bQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fMcbxmz-x_NAc-ozHPo7o2pRwFOWW2y3bQ&s",
      ],
    },
  ];

  return (
    <>
      <img
        className="destination-banner"
        src="https://www.vietnamairlines.com/~/media/Images/HeroBannerDestination/Vietnam/Herro%20banner/DANANG/Hero%20banner/1300x450/Danang_banner_2600x1111_0.jpg"
        alt="banner"
      />
      <Container>
        <Row className="mt-3">
          <Col lg={4} md={4} className="mb-3">
            <Card className="rounded-0">
              <Card.Header className="text-center">
                <Card.Title className="d-flex justify-content-center align-items-center">
                  <img style={{ width: "40px" }} src={house} alt="icon" />{" "}
                  <h2 className="mb-0 mt-2 fw-bold info-title">Local Host</h2>
                </Card.Title>
                <Card.Text className="fw-bolder info-subtext" >
                  Trải nghiệm cùng một trong 1254 Host tại Hà Nội.
                </Card.Text>
              </Card.Header>

              <Card.Body className="d-flex flex-column align-items-center">
                <Container className="mb-3 ">
                  <Row className="localhost-card">
                    {users.map((user, index) => (
                      <Col lg={4} md={4} className="mb-3 localhost-card-item">
                        <InfoUser
                          key={index}
                          name={user.name}
                          avatar={user.avatar}
                        />
                      </Col>
                    ))}
                  </Row>
                </Container>
                <Button className="border-1 border-black rounded-0 bg-white text-black fw-bold">
                  Xem Thêm
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={4} className="mb-3">
            <Card className="rounded-0">
              <Card.Header className="text-center">
                <Card.Title className="d-flex justify-content-center align-items-center">
                  <img style={{ width: "40px" }} src={fire} alt="icon" />{" "}
                  <h2 className="mb-0 mt-2 fw-bold info-title">Upcoming Host</h2>
                </Card.Title>
                <Card.Text className="fw-bolder info-subtext" >
                  Gặp gỡ một số trong 96 du khách đến Hà Nội.
                </Card.Text>
              </Card.Header>

              <Card.Body className="d-flex flex-column align-items-center">
                <Container className="mb-3">
                  <Row className="localhost-card">
                    {users.map((user, index) => (
                      <Col lg={4} md={4} className="mb-3">
                        <InfoUser
                          key={index}
                          name={user.name}
                          avatar={user.avatar}
                        />
                      </Col>
                    ))}
                  </Row>
                </Container>
                <Button className="border-1 border-black rounded-0 bg-white text-black fw-bold">
                  Xem Thêm
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={4} className="mb-3">
            <Card className="rounded-0">
              <Card.Header className="text-center">
                <Card.Title className="d-flex justify-content-center align-items-center ">
                  <img style={{ width: "40px" }} src={bestFriend} alt="icon" />{" "}
                  <h2 className="mb-0 mt-2 fw-bold info-title">Hangout</h2>
                </Card.Title>
                <Card.Text className="fw-bolder info-subtext" >
                  20 thành viên đang sẵn sàng gặp gỡ ngay lúc này.
                </Card.Text>
              </Card.Header>

              <Card.Body className="d-flex flex-column align-items-center">
                <Container className="mb-3">
                  <Row className="localhost-card">
                    {users.map((user, index) => (
                      <Col lg={4} md={4} className="mb-3">
                        <InfoUser
                          key={index}
                          name={user.name}
                          avatar={user.avatar}
                        />
                      </Col>
                    ))}
                  </Row>
                </Container>
                <Button className="border-1 border-black rounded-0 bg-white text-black fw-bold">
                  Xem Thêm
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
          <div className="d-flex justify-content-center align-items-center">
            <img style={{ width: "50px" }} src={event} alt="icon" />{" "}
            <h2 className="mb-0 mt-2 fw-bold">Events</h2>
          </div>

          <Container className="mt-4">
            <Row>
              {events.map((eventData, index) => (
                <Col lg={6} md={6} sm={12} className="mb-2">
                  <EventCard
                    key={index}
                    eventImage={eventData.eventImage}
                    eventName={eventData.eventName}
                    eventTime={eventData.eventTime}
                    participants={eventData.participants}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </Row>
      </Container>
    </>
  );
}

export default Destination;
