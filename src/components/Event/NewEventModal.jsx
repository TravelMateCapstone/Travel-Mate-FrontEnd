import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../../assets/css/Event/NewEventModal.css'

const NewEventModal = ({ show, handleClose, handleCreateEvent }) => {
    const [eventName, setEventName] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [location, setLocation] = useState('');
    const [eventImage, setEventImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEvent = {
            eventName,
            eventDescription,
            startTime,
            endTime,
            location,
            eventImage,
        };
        handleCreateEvent(newEvent);
        handleClose();
    };

    const handleImageChange = (e) => {
        setEventImage(e.target.files[0]);
    };

    return (
        <Modal show={show} onHide={handleClose} className="new-event-modal">
            <Modal.Header closeButton>
                <Modal.Title className='title'>Tạo sự kiện</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className='modal-event' onSubmit={handleSubmit}>
                    <div className='eventInformation'>
                        <Form.Label className='eventInfo'>Bảng thông tin</Form.Label>
                        <Form.Text className='eventDetails'>Nhập thông  tin chi tiết cho sự kiện của bạn</Form.Text>
                    </div>
                    <Form.Group controlId="eventName">
                        <Form.Label>Tên sự kiện</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nhập tên sự kiện"
                            value={eventName}
                            onChange={(e) => setEventName(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="eventDescription" className="mt-3">
                        <Form.Label>Mô tả sự kiện</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Nhập mô tả sự kiện"
                            value={eventDescription}
                            onChange={(e) => setEventDescription(e.target.value)}
                        />
                    </Form.Group>

                    <div className="date-time-container mt-3">
                        <Form.Group controlId="startTime" lassName='ip-start'>
                            <Form.Label>Ngày giờ bắt đầu</Form.Label>
                            <Form.Control
                                c
                                type="datetime-local"
                                value={startTime}
                                onChange={(e) => setStartTime(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="endTime" className='ip-end'>
                            <Form.Label>Thời gian kết thúc</Form.Label>
                            <Form.Control

                                type="datetime-local"
                                value={endTime}
                                onChange={(e) => setEndTime(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </div>

                    <Form.Group controlId="location" className="mt-3">
                        <Form.Label>Địa điểm</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nhập địa điểm sự kiện"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="eventImage" className="mt-3">
                        <Form.Label className='event-image'>Ảnh sự kiện</Form.Label>
                        <Form.Control
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </Form.Group>

                    <div className="button-container">
                        <Button className='btn-create' variant="primary" type="submit">
                            Tạo mới
                        </Button>
                        <Button className='btn-cancel' variant="secondary" onClick={handleClose}>
                            Hủy
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default NewEventModal;
