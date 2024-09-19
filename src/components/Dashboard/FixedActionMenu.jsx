import React from 'react';
import '../../assets/css/DashBoard/FixedActionMenu.css';

const FixedActionMenu = () => {
  return (
    <div className="fixed-action-menu">
      <div className="icon">
        <i className="bi bi-plus-square"></i>
      </div>
      <div className="icon">
        <i className="bi bi-people"></i>
      </div>
      <div className="icon">
        <i className="bi bi-calendar-plus"></i>
      </div>
      <div className="icon">
        <i className="bi bi-car-front"></i>
      </div>
      <div className="icon">
        <i className="bi bi-card-text"></i>
      </div>
    </div>
  );
};

export default FixedActionMenu;
