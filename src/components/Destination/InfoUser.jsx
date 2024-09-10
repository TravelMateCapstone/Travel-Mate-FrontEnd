import React from 'react';
import '../../assets/css/Destination/InfoUser.css'

function InfoUser({ name, avatar }) {
  return (
    <div className='d-flex flex-column align-items-center'>
      <img 
        className='rounded-circle object-fit-cover info-img' 
        src={avatar} 
        alt="avatar" 
        style={{height: '70px', width: '70px'}}
      />
      <small className='fw-bold text-nowrap'>{name}</small>
    </div>
  );
}

export default InfoUser;
