import React from 'react';
import '../../assets/css/DashBoard/EventSlide.css';

function EventSlide({ image, title, date, location }) {
  return (
    <div className="event-slide">
      <img
        src={image}
        alt={title}
        className="event-image object-fit-cover h-100"
      />
      <div className="event-text-overlay">
        <h3 className="event-title text-white">{title}</h3>
        <p className="event-date">{date}</p>
        <p className="event-location">{location}</p>
      </div>
    </div>
  );
}

export default EventSlide;
