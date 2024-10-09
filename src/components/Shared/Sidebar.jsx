// src/components/Sidebar/Sidebar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../assets/css/Shared/Sidebar.css';

const SidebarItem = ({ icon, title, path, active }) => {
    return (
        <Link to={path}>
            <div className={`sidebar-item ${active ? 'active-sidebar' : ''}`}>
                <ion-icon name={icon}></ion-icon>
                <span>{title}</span>
            </div>
        </Link>
    );
};

const Sidebar = ({ items }) => {
    const location = useLocation(); // Lấy đường dẫn hiện tại

    return (
        <div className="sidebar-custom">
            {items.map((item, index) => (
                <SidebarItem
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    path={item.path}
                    active={location.pathname === item.path}
                />
            ))}
        </div>
    );
};

export default Sidebar;
