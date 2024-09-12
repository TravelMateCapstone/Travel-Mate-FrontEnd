import React from "react";
import { Card, Button } from "react-bootstrap";
import "../../assets/css/Destination/EventCard.css";

function EventCard({ eventImage, eventName, eventTime, participants }) {
  return (
    <Card className="event-card">
      <div className="image-placeholder">
        <img
          className="event-img"
          src={eventImage}
          alt="event"
        />
      </div>
      <div className="event-info">
        <h6 className="event-title">{eventName}</h6>
        <p className="event-time">{eventTime}</p>
        <div className="participants">
          {participants.map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt={`participant-${index}`}
            />
          ))}
        </div>
        <Button className="join-button event-button">Tham gia</Button>
      </div>
    </Card>
  );
}

export default EventCard;
