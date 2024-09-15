import React from 'react';
import '../../assets/css/DashBoard/HostCard.css';

function HostCard({ avatar, name, location }) {
  return (
    <div className="host-card">
      <img src={avatar} alt={name} className='avatar-placeholder' />
      <h3 className="host-name">{name}</h3>
      <p className="host-location fw-medium">Sống tại {location}</p>
      <button className="contact-button fw-medium">Liên hệ</button>
    </div>
  );
}

export default HostCard;
