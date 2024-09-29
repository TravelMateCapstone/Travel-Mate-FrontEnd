import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../assets/css/Shared/AdminSidebar.css';
import RoutePath from '../../routes/RoutePath';

function AdminSidebar() {
  const location = useLocation(); 

  return (
    <div className="sidebar">
      <h2 className="d-flex fw-bold mx-4 my-0" style={{ fontSize: '32px' }}>
        <div className="text-primary">Travel</div><div>mate</div>
      </h2>
      <ul className="menu">
        <li className={`menu-item ${location.pathname === RoutePath.ADMIN ? 'active' : ''}`}>
          <Link to={RoutePath.ADMIN}>
            <span className="icon">📊</span>
            <span className="text">Thống kê</span>
          </Link>
        </li>
        <li className={`menu-item ${location.pathname === RoutePath.ADMIN_ACCOUNTLIST ? 'active' : ''}`}>
          <Link to={RoutePath.ADMIN_ACCOUNTLIST}>
            <span className="icon">👤</span>
            <span className="text">Quản lý người dùng</span>
          </Link>
        </li>
        <li className={`menu-item ${location.pathname === RoutePath.ADMIN_REPORT ? 'active' : ''}`}>
          <Link to={RoutePath.ADMIN_REPORT}>
            <span className="icon">📋</span>
            <span className="text">Khiếu nại/ tố cáo</span>
          </Link>
        </li>
        <li className={`menu-item ${location.pathname === RoutePath.ADMIN_TRANSACTION ? 'active' : ''}`}>
          <Link to={RoutePath.ADMIN_TRANSACTION}>
            <span className="icon">📅</span>
            <span className="text">Lịch sử giao dịch</span>
          </Link>
        </li>
        <li className="menu-item">
          <span className="icon">🚪</span>
          <span className="text">Đăng xuất</span>
        </li>
      </ul>
    </div>
  );
}

export default AdminSidebar;
