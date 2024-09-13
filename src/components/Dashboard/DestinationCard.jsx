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
      <div className="content">
        <h1>{title}</h1>
        <p>{description}</p>

        {/* Button */}
        <button>Chi tiết</button>
      </div>
    </div>
  );
}

export default DestinationCard;
