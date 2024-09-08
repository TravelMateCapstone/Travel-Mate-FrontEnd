import React, { useState } from 'react';
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
    <Favorites />,
    <Friends />,
    <MyHome />,
    <PastTrips />,
  ];

  return (
    <div className="tabs">
      <div className="tab-header">
        {['About Me', 'Favorites', 'Friends', 'My Home', 'Past Trips'].map((tab, index) => (
          <div
            key={index}
            className={activeTab === index ? 'active' : ''}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="tab-indicator">
        <div style={{ left: `${activeTab * 20}%` }}></div>
      </div>

      <div className="tab-body">
        <div className="active">
          {tabComponents[activeTab]} {/* Render the corresponding component based on the activeTab */}
        </div>
      </div>
    </div>
  );
}

export default Profile;