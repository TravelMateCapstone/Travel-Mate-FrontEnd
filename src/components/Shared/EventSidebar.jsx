import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../assets/css/Shared/EventSidebar.css';
import RoutePath from '../../routes/RoutePath';

function EventSidebar() {
    const location = useLocation();

    return (
        <div className="sidebar">
            <ul className="menu">
                <li className="menu-item active">
                    <i className="bi bi-box-arrow-right-fill icon"></i>
                    <span className="text">Danh sách sự kiện</span>
                </li>
                <li className="menu-item">
                    <i className="bi bi-box-arrow-right-fill icon"></i>
                    <span className="text">Sự kiện đã tham gia</span>
                </li>
                <li className="menu-item">
                    <i className="bi bi-box-arrow-right-fill icon"></i>
                    <span className="text">Sự kiện đã tạo</span>
                </li>
                <li className="menu-item">
                    <i className="bi bi-box-arrow-right-fill icon"></i>
                    <span className="text">Tạo sự kiện</span>
                </li>
            </ul>
        </div>
    );
}

export default EventSidebar;
