import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import '../assets/css/Profile/Profile.css';
import AboutMe from '../components/Profile/AboutMe';
import Favorites from '../components/Profile/Favorites';
import Friends from '../components/Profile/Friends';
import MyHome from '../components/Profile/MyHome';
import PastTrips from '../components/Profile/PastTrips';
function Profile() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  // Component array for mapping
  const tabComponents = [
    <AboutMe />,
    <MyHome />,
    <PastTrips />,
    <Friends />,
    <Favorites />,
  ];

  const tabIcons = [
    'bi bi-info-circle',
    'bi bi-house',
    'bi bi-clock-history',
    'bi bi-people',
    'bi bi-heart'
  ];

  return (
    <div className="tabs">
      <div className="tab-header">
        {['Giới thiệu', 'Nhà của tôi', 'Chuyến đi', 'Bạn bè', 'Địa điểm'].map((tab, index) => (
          <div
            key={index}
            className={activeTab === index ? 'active' : ''}
            onClick={() => handleTabClick(index)}
          >
            {/* Add icon before the tab name */}
            <i className={tabIcons[index]}></i> {tab}
          </div>
        ))}
      </div>

      <div className="tab-indicator">
        <div style={{ left: `${activeTab * 20}%` }}></div>
      </div>

      <div className="tab-body">
        <div className="active">
          {tabComponents[activeTab]}
        </div>
      </div>
    </div>
  );
}

export default Profile;
