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
                <li className={`menu-item ${location.pathname === RoutePath.LOCAL_TRIP_HISTORY ? 'active' : ''}`}>
                    <Link to={RoutePath.LOCAL_TRIP_HISTORY}>
                        <i className="bi bi-person-fill icon"></i>
                        <span className="text">Chuyến đi</span>
                    </Link>
                </li>
                <li className={`menu-item ${location.pathname === RoutePath.LOCAL_CALENDAR_MANAGEMENT ? 'active' : ''}`}>
                    <Link to={RoutePath.LOCAL_CALENDAR_MANAGEMENT}>
                        <i className="bi bi-wallet-fill icon"></i>
                        <span className="text">Lịch</span>
                    </Link>
                </li>
                {/* <li className={`menu-item ${location.pathname === RoutePath.ADMIN_TRIPHISTORY ? 'active' : ''}`}>
                    <Link to={RoutePath.ADMIN_TRIPHISTORY}>
                        <i className="bi bi-bus-front-fill icon"></i>
                        <span className="text">Kế hoạch</span>
                    </Link>
                </li> */}
                <li className="menu-item">
                    <i className="bi bi-box-arrow-right-fill icon"></i>
                    <span className="text">Đăng xuất</span>
                </li>
            </ul>
        </div>
    );
}

export default LocalSidebar;
