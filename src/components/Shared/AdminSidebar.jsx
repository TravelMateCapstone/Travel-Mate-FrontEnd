import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../assets/css/Shared/AdminSidebar.css';
import RoutePath from '../../routes/RoutePath';
import logo from '../../assets/images/logo.png'
function AdminSidebar() {
  const location = useLocation();

  return (
    <div className="sidebar-custom">
      <img src={logo} alt="logo" style={{
        width: '188px',
        marginLeft: '20px',
        marginBottom: '30px'
      }} />
      <ul className="menu">
        <li className={`menu-item ${location.pathname === RoutePath.ADMIN ? 'active' : ''}`} style={{
          padding: '13px 35px',
        }}>
          <Link to={RoutePath.ADMIN} className='d-flex align-items-center' style={{
            gap: '15px'
          }}>
            <ion-icon name="bar-chart-outline" style={{
              fontSize: '24px',
              color: location.pathname === RoutePath.ADMIN ? 'white' : 'inherit' // Thay đổi màu khi active
            }}></ion-icon>
            <span className="text">Thống kê</span>
          </Link>
        </li>
        <li className={`menu-item ${location.pathname === RoutePath.ADMIN_REPORT ? 'active' : ''}`} style={{
          padding: '13px 35px',
        }}>
          <Link to={RoutePath.ADMIN_REPORT} className='d-flex align-items-center'>
            <ion-icon name="warning-outline" style={{
              fontSize: '24px',
              marginRight: '10px',
              color: location.pathname === RoutePath.ADMIN_REPORT ? 'white' : 'inherit' // Thay đổi màu khi active
            }}></ion-icon>
            <span className="text">Quản lí khiếu nại</span>
          </Link>
        </li>
        <li className={`menu-item ${location.pathname === RoutePath.ADMIN_ACCOUNTLIST ? 'active' : ''}`} style={{
          padding: '13px 35px',
        }}>
          <Link to={RoutePath.ADMIN_ACCOUNTLIST} className='d-flex align-items-center' >
            <ion-icon
              name="people-outline"
              style={{
                fontSize: '24px',
                marginRight: '10px',
                color: location.pathname === RoutePath.ADMIN_ACCOUNTLIST ? 'white' : 'inherit' // Thay đổi màu khi active
              }}>
            </ion-icon>
            <span className="text">Quản lý tài khoản</span>
          </Link>
        </li>

        <li className={`menu-item ${location.pathname === RoutePath.ADMIN_TRANSACTION ? 'active' : ''}`} style={{
          padding: '13px 35px',
        }}>
          <Link to={RoutePath.ADMIN_TRANSACTION} className='d-flex align-items-center'>
            <ion-icon name="document-text-outline" style={{
              fontSize: '24px',
              marginRight: '10px',
              color: location.pathname === RoutePath.ADMIN_TRANSACTION ? 'white' : 'inherit' // Thay đổi màu khi active
            }}></ion-icon>
            <span className="text">Lịch sử giao dịch</span>
          </Link>
        </li>
        <li className={`menu-item ${location.pathname === RoutePath.ADMIN_TRIPHISTORY ? 'active' : ''}`} style={{
          padding: '13px 35px',
        }}>
          <Link to={RoutePath.ADMIN_TRIPHISTORY} className='d-flex align-items-center'>
            <ion-icon name="car-sport-outline" style={{
              fontSize: '24px',
              marginRight: '10px',
              color: location.pathname === RoutePath.ADMIN_TRIPHISTORY ? 'white' : 'inherit' // Thay đổi màu khi active
            }}></ion-icon>
            <span className="text">Lịch sử chuyến đi</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminSidebar;
