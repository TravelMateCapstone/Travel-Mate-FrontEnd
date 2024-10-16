import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../assets/css/Event/JoinedEventDetail.css';
import { useSelector } from 'react-redux';

function JoinedEventDetail() {

    const selectedEvent = useSelector(state => state.event.selectedEvent);

    if (!selectedEvent) {
        return <div>No event selected</div>;
    }

    const members = [
        { id: 1, name: 'Jonh David', image: 'https://yt3.googleusercontent.com/oN0p3-PD3HUzn2KbMm4fVhvRrKtJhodGlwocI184BBSpybcQIphSeh3Z0i7WBgTq7e12yKxb=s900-c-k-c0x00ffffff-no-rj', location: 'Da Nang, VN' },
        { id: 2, name: 'Hieu Nguyen', image: 'https://kenh14cdn.com/thumb_w/640/203336854389633024/2024/10/5/hieuthuhai-6-1724922106140134622997-0-0-994-1897-crop-17249221855301721383554-17281064622621203940077.jpg', location: 'Da Nang, VN' },
        { id: 3, name: 'Linh Tran', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3HUU-eAMPAQL0wpBBY2taVQkWH4EwUWeHw&s', location: 'Da Nang, VN' }
    ];

    return (
        <div className='join-event-detail-container'>
            <img src={selectedEvent.img} alt={selectedEvent.title} style={{
                height: '331px',
                objectFit: 'cover',
                borderRadius: '20px',
                marginBottom: '5px'
            }} />

            <div className='d-flex'>
                <div className='event-time'>
                    <p>{selectedEvent.time}</p>
                </div>
                <div className='event-status'>
                    <Form.Select aria-label="Default select example" className='form-event-status'>
                        <option>Đã tham gia</option>
                        <option value="Rời khỏi nhóm">Hủy tham gia</option>
                    </Form.Select>
                </div>
            </div>

            <div className='justify-content-between'>
                <p className='event-name-inf'>{selectedEvent.title}</p>
                <div className='event-location-inf'>
                    <i className='bi bi-geo-alt'></i> {selectedEvent.location}
                </div>
                <div className='d-flex align-items-center'>
                    <div className='event-start-date'>
                        <p className='my-4'>{selectedEvent.time}</p>
                    </div>
                    <div className='m-2 event-end-date'>
                        <p className='m-2'>{selectedEvent.time}</p>
                    </div>
                </div>

            </div>
            <div className='members d-flex'>
                <div className='member-icon'>
                    <ion-icon name="people-outline" className="icon-margin"></ion-icon>
                </div>
                <div className='member-text'>
                    <p>{selectedEvent.members} người tham gia</p>
                </div>
            </div>

            <div className="section-container">
                <div className="section-left my-4">
                    <p className='m-3 title'>Nội dung</p>
                    <p className='left-content m-3'>{selectedEvent.text}</p>
                </div>
                <div className="section-right my-4">
                    <div className='d-flex justify-content-between align-items-center'>
                        <h4 className='m-3 title'>Người tham gia</h4>
                        <a href="#" className='view-all-link m-3'>Xem tất cả</a>
                    </div>
                    <div className='members-list m-3'>
                        {members.map((member) => (
                            <div key={member.id} className='member-item d-flex align-items-center'>
                                <img
                                    src={member.image}
                                    className='members-img'
                                    alt={`member-${member.id}`}
                                />
                                <div className='member-info'>
                                    <p className='member-name'>{member.name}</p>
                                    <p className='member-location'>{member.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JoinedEventDetail;
