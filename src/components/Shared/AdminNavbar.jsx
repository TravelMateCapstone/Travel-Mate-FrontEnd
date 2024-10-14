import React from 'react';
import '../../assets/css/Shared/AdminNavbar.css';

function AdminNavbar() {
    return (
        <div className="admin-navbar">
            <div className="search-bar-nav d-none d-md-flex">
                <i className="bi bi-search"></i>
                <input type="text" placeholder="Tìm kiếm" style={{
                    height: '43px',
                }} />
            </div>

            <div className="navbar-right">
                <div className="notification">
                    <ion-icon name="notifications-outline" style={{
                        fontSize: '30px',
                    }}></ion-icon>
                    <span className="badge">2</span>
                </div>
                <div className="user-profile">
                    <img
                        src="https://yt3.googleusercontent.com/oN0p3-PD3HUzn2KbMm4fVhvRrKtJhodGlwocI184BBSpybcQIphSeh3Z0i7WBgTq7e12yKxb=s900-c-k-c0x00ffffff-no-rj"
                        alt="User Profile"
                        className="profile-img"
                    />
                    <div className="user-info">
                        <span className="user-name">Moni Roy</span>
                        <span className="user-role fw-semibold">Admin</span>
                    </div>

                </div>
                <ion-icon name="chevron-down-circle-outline" style={{
                    fontSize: '30px',
                }}></ion-icon>
            </div>
        </div>
    );
}

export default AdminNavbar;
