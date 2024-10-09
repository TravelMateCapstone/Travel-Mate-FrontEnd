import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../assets/css/Shared/LocalSidebar.css';
import RoutePath from '../../routes/RoutePath';

function LocalSidebar() {
    const location = useLocation();

    return (
        <div className="sidebar">
            <h2 className="d-flex fw-bold mx-2 my-0 mb-2" style={{ fontSize: '32px' }}>
                <div className="text-primary">Travel</div><div>mate</div>
            </h2>
            <ul className="menu">
                <li className={`menu-item ${location.pathname === RoutePath.ADMIN ? 'active' : ''}`}>
                    <Link to={RoutePath.ADMIN}>
                        <i className="bi bi-bar-chart-fill icon"></i>
                        <span className="text">Thống kê</span>
                    </Link>
                </li>
                <li className={`menu-item ${location.pathname === RoutePath.LOCAL_WALLET_MANAGEMENT ? 'active' : ''}`}>
                    <Link to={RoutePath.LOCAL_WALLET_MANAGEMENT}>
                        <i className="bi bi-clipboard-fill icon"></i>
                        <span className="text">Ví tiền</span>
                    </Link>
                </li>
                <li className="menu-item">
                    <i className="bi bi-box-arrow-right-fill icon"></i>
                    <span className="text">Đăng xuất</span>
                </li>
            </ul>
        </div>
    );
}

export default LocalSidebar;
