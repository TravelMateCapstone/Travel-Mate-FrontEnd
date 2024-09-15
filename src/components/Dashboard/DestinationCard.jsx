import React from 'react';
import '../../assets/css/DashBoard/DestinationCard.css';

function DestinationCard({ image, title, description }) {
  return (
    <div className="destination-card">
      {/* Image */}
      <img 
        src={image} 
        alt={title} 
      />

      {/* Content (Text + Button) */}
      <div className="content me-3">
        <div className='d-flex justify-content-between'><h1>{title}</h1> <button>Chi tiết</button></div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default DestinationCard;
