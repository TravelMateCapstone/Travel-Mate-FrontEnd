import React from 'react';
import '../../assets/css/Destination/InfoUser.css';

function InfoUser({ name, avatar }) {
  return (
    <div className='info-user-container'>
      <img 
        className='info-img' 
        src={avatar} 
        alt="avatar" 
      />
      <small className='user-name'>{name}</small>
    </div>
  );
}

export default InfoUser;
