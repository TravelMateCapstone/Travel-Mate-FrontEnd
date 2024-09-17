import React from 'react';
import '../../assets/css/DashBoard/PostCard.css';

const PostCard = ({ name, location, departureDate, participants, status }) => {
    // Define a function to conditionally set the background color based on the status
    const getStatusStyle = () => {
        if (status === "Đã đủ") {
            return { backgroundColor: "red", color: "white" };
        }
        return { backgroundColor: "#28a745", color: "white" }; // Default to green for "Đang tìm"
    };

    return (
        <div className="post-card">
            <div>
                <div className='d-flex gap-3 card-info-user'>
                    <img
                        src="https://via.placeholder.com/50"
                        alt="User Avatar"
                        className="user-avatar"
                    />
                    <div>
                        <h3 className="user-name fw-semibold text-black m-0 p-0">{name}</h3>
                        <p className="location text-secondary m-0 p-0"><i className="bi bi-geo-alt-fill"></i> {location} </p>
                    </div>
                </div>

                <div className='d-flex gap-5 text-secondary post-info'>
                    <p className='m-0 fw-medium d-flex gap-2'><i className="bi bi-calendar2-week"></i> Khởi hành: {departureDate}</p>
                    <p className='fw-medium d-flex gap-2 m-0'><i className="bi bi-people-fill"></i> {participants} người tham gia</p>
                </div>
            </div>

            <div className='d-flex flex-column align-items-end me-3'>
                <i className="bi bi-three-dots"></i>
                <div className='status-post me-3' style={getStatusStyle()}>{status}</div>
            </div>
        </div>
    );
};

export default PostCard;
