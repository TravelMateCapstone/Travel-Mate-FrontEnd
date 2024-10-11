import React, { useState } from 'react';
import Navbar from "../components/Shared/NavBar";
import { Offcanvas } from 'react-bootstrap'; // Import Offcanvas from Bootstrap
import '../assets/css/layouts/AdminLayout.css';
import EventSidebar from '../components/Shared/EventSidebar';

function EventLayout({ children }) {
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
                    <EventSidebar />
                </Offcanvas.Body>
            </Offcanvas>

            <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
                ☰
            </button>

            <div className="admin-sidebar">
                <EventSidebar />
            </div>

            <div className="admin-content">
                <Navbar />
                <div className="admin-main-content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default EventLayout;
