import React from "react";
import { Card, Button } from "react-bootstrap";
import "../../assets/css/Destination/EventCard.css";

function EventCard({ eventImage, eventName, eventTime, participants }) {
  return (
    <Card className="event-card d-flex flex-row align-items-center p-3">
      <div className="image-placeholder bg-light">
        <img
          className="event-img"
          src={eventImage}
          alt="event"
          style={{ width: "120px", height: "120px", objectFit: "cover" }}
        />
      </div>
      <div className="event-info ms-3">
        <h6 className="mb-1 event-title">{eventName}</h6>
        <p className="text-muted mb-1 event-time">{eventTime}</p>
        <div className="mb-2 d-flex justify-content-start">
          {participants.map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              className="me-1 rounded-circle"
              alt={`participant-${index}`}
              style={{ width: "20px", height: "20px", objectFit: "cover" }}
            />
          ))}
        </div>
        <Button className="join-button px-3 py-1 event-button">Tham gia</Button>
      </div>
    </Card>
  );
}

export default EventCard;
