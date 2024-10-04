import React, { useState } from 'react';
import LocalSidebar from "../components/Shared/LocalSidebar";
import LocalNavbar from "../components/Shared/LocalNavbar";
import { Offcanvas } from 'react-bootstrap'; // Import Offcanvas from Bootstrap
import '../assets/css/layouts/AdminLayout.css';

function LocalLayout({ children }) {
    const [showSidebar, setShowSidebar] = useState(false); // State to toggle sidebar

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div className="admin-layout">
            <Offcanvas show={showSidebar} onHide={toggleSidebar} className="admin-sidebar-offcanvas">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <LocalSidebar />
                </Offcanvas.Body>
            </Offcanvas>

            <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
                ☰
            </button>

            <div className="admin-sidebar">
                <LocalSidebar />
            </div>

            <div className="admin-content">
                <LocalNavbar />
                <div className="admin-main-content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default LocalLayout;
