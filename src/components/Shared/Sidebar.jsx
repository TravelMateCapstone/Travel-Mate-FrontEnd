import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../assets/css/Shared/Sidebar.css';
import GroupJoinedList from '../Group/GroupJoinedList';
import RoutePath from '../../routes/RoutePath';

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

const Sidebar = ({ items, createBtn, onCreateBtnClick }) => {
    const location = useLocation();

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
            {createBtn && (
                <button className="btn btn-outline-dark create-btn w-100" onClick={onCreateBtnClick}>
                    {createBtn}
                </button>
            )}
        </div>
    );
};

export default Sidebar;
