import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../assets/css/Shared/AdminSidebar.css';
import RoutePath from '../../routes/RoutePath';

function AdminSidebar() {
  const location = useLocation(); 

  return (
    <div className="sidebar">
      <h2 className="d-flex fw-bold mx-4 my-0 mb-2" style={{ fontSize: '32px' }}>
        <div className="text-primary">Travel</div><div>mate</div>
      </h2>
      <ul className="menu">
        <li className={`menu-item ${location.pathname === RoutePath.ADMIN ? 'active' : ''}`}>
          <Link to={RoutePath.ADMIN}>
            <i className="bi bi-bar-chart-fill icon"></i>
            <span className="text">Thống kê</span>
          </Link>
        </li>
        <li className={`menu-item ${location.pathname === RoutePath.ADMIN_REPORT ? 'active' : ''}`}>
          <Link to={RoutePath.ADMIN_REPORT}>
            <i className="bi bi-clipboard-fill icon"></i>
            <span className="text">Khiếu nại/ tố cáo</span>
          </Link>
        </li>
        <li className={`menu-item ${location.pathname === RoutePath.ADMIN_ACCOUNTLIST ? 'active' : ''}`}>
          <Link to={RoutePath.ADMIN_ACCOUNTLIST}>
            <i className="bi bi-person-fill icon"></i>
            <span className="text">Quản lý tài khoản</span>
          </Link>
        </li>
        <li className={`menu-item ${location.pathname === RoutePath.ADMIN_TRANSACTION ? 'active' : ''}`}>
          <Link to={RoutePath.ADMIN_TRANSACTION}>
            <i className="bi bi-wallet-fill icon"></i>
            <span className="text">Lịch sử giao dịch</span>
          </Link>
        </li>
        <li className={`menu-item ${location.pathname === RoutePath.ADMIN_TRIPHISTORY ? 'active' : ''}`}>
          <Link to={RoutePath.ADMIN_TRIPHISTORY}>
            <i className="bi bi-bus-front-fill icon"></i>
            <span className="text">Lịch sử chuyến đi</span>
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

export default AdminSidebar;
