import React from 'react';
import '../../assets/css/DashBoard/HostCard.css';

function HostCard({ name, location, imageSrc, onContactClick }) {
  return (
    <div className="host-card">
      <img src={imageSrc} alt="Host" className="host-card-image" />
      <div className="host-card-details">
        <h3 className="host-name fw-bold text-white mb-2">{name}</h3>
        <p className="host-location mb-2">{location}</p>
        <button className="contact-button fw-light mb-4" onClick={onContactClick}>
          Liên hệ
        </button>
      </div>
    </div>
  );
}

export default HostCard;
