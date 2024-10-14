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

const Sidebar = ({ items, createBtn, isShowGroupList, createbtn }) => {
    const location = useLocation(); // Lấy đường dẫn hiện tại

    // Kiểm tra đường dẫn hiện tại
    const isJoinGroupDetails = location.pathname === RoutePath.JOINGROUPDETAILS;
    const isMyGroupDetail = location.pathname === RoutePath.MYGROUPDETAIL;

    return (
        <div className="sidebar-custom">
            {items.map((item, index) => {
                // Logic để đánh dấu active cho các trang cụ thể
                let isActive = false;
                if (isJoinGroupDetails && item.path === RoutePath.GROUPJOINED) {
                    isActive = true; // Đánh dấu active cho "Nhóm đã tham gia"
                } else if (isMyGroupDetail && item.path === RoutePath.GROUPCREATED) {
                    isActive = true; // Đánh dấu active cho "Nhóm đã tạo"
                } else {
                    isActive = location.pathname === item.path; // Kiểm tra bình thường
                }

                return (
                    <SidebarItem
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        path={item.path}
                        active={isActive}
                    />
                );
            })}
            {createBtn && (
                <button className="btn btn-outline-dark create-btn w-100">
                    {createBtn}
                </button>
            )}

            {isShowGroupList && (
                <GroupJoinedList />
            )}

            {/* Kiểm tra nếu createbtn khác null thì render nút */}
            {createbtn && (
                <button className="btn-create">
                    {createbtn}
                </button>
            )}
        </div>
    );
};

export default Sidebar;
