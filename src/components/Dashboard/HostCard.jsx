import React from 'react';
import '../../assets/css/DashBoard/HostCard.css';

function HostCard() {
  return (
    <div className="host-card">
      <img src='https://cdn.oneesports.vn/cdn-data/sites/4/2024/01/Zed_38.jpg' alt="Host" className="host-card-image" />
      <div className="host-card-details">
        <h3 className="host-name fw-bold text-white mb-2">Nhơn Trần</h3>
        <p className="host-location mb-2">Quảng Nam, Việt Nam</p>
        <button className="contact-button fw-light mb-4">Liên hệ</button>
      </div>
    </div>
  );
}

export default HostCard;
