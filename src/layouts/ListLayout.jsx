import React, { useState } from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row, Offcanvas } from 'react-bootstrap';
import NavBar from '../components/Shared/NavBar';
import Footer from '../components/Shared/Footer';
import Sidebar from '../components/Shared/Sidebar';
import RoutePath from '../routes/RoutePath';
import { useLocation } from 'react-router-dom';
import '../assets/css/layouts/ListLayout.css';
import ProposeEvent from '../components/Event/ProposeEvent';
import ProposeGroup from '../components/Group/ProposeGroup';
import GroupJoinedList from '../components/Group/GroupJoinedList';
import NewEventModal from '../components/Event/NewEventModal'; // Import NewEventModal

const ListLayout = ({ children }) => {
    const [showNewEventModal, setShowNewEventModal] = useState(false); // State để điều khiển hiển thị của modal
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const location = useLocation();

    const handleCreateEvent = (newEvent) => {
        // Xử lý sự kiện tạo mới ở đây
        console.log(newEvent);
    };

    const sidebarItemsEvent = [
        { icon: 'list-circle', title: 'Danh sách sự kiện', path: RoutePath.EVENT },
        { icon: 'people-circle', title: 'Sự kiện đã tham gia', path: RoutePath.GROUPJOINED },
        { icon: 'add-circle', title: 'Sự kiện đã tạo', path: RoutePath.ADMIN }
    ];

    const sidebarItemsGroup = [
        { icon: 'list-circle', title: 'Danh sách nhóm', path: RoutePath.GROUP },
        { icon: 'people-circle', title: 'Nhóm đã tham gia', path: RoutePath.GROUPJOINED },
        { icon: 'add-circle', title: 'Nhóm đã tạo', path: RoutePath.GROUPCREATED }
    ];

    const sidebarItemsDefault = [
        { icon: 'list-circle', title: 'Home', path: RoutePath.EVENT },
        { icon: 'people-circle', title: 'Documents', path: RoutePath.GROUP },
        { icon: 'add-circle', title: 'Settings', path: '/settings' }
    ];

    let itemsToDisplay;
    let createbtn = '';
    let showProposeGroup = false;
    let showProposeEvent = false;

    if (location.pathname === RoutePath.EVENT || location.pathname === RoutePath.EVENT_DETAIL) {
        itemsToDisplay = sidebarItemsEvent;
        showProposeEvent = true;
        createbtn = 'Tạo sự kiện';
    } else if (location.pathname === RoutePath.GROUP || location.pathname === RoutePath.GROUPJOINED || location.pathname === RoutePath.GROUPCREATED) {
        itemsToDisplay = sidebarItemsGroup;
        showProposeGroup = true;
        if (location.pathname === RoutePath.GROUP) {
            createbtn = 'Tạo nhóm';
        }
    } else {
        itemsToDisplay = sidebarItemsDefault;
    }

    const handleShowNewEventModal = () => {
        setShowNewEventModal(true);
    };

    const handleCloseNewEventModal = () => {
        setShowNewEventModal(false);
    };

    return (
        <Container fluid className='p-0 m-0 list-layout-custom'>
            <NavBar />

            <Container fluid className='container-layout-list'>
                <Row>
                    <Col lg={2} md={3} className='p-0 d-none d-md-block'>
                        <Sidebar
                            items={itemsToDisplay}
                            createBtn={createbtn}
                            onCreateBtnClick={location.pathname === RoutePath.EVENT ? handleShowNewEventModal : null}
                        />
                    </Col>
                    <Button
                        variant="outline-dark"
                        className="d-md-none sidebar-toggle"
                        onClick={() => setShowOffcanvas(true)}>
                        <ion-icon name="menu-outline"></ion-icon>
                    </Button>
                    <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)} className='offcanvas-sidebar'>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Sidebar items={itemsToDisplay} createBtn={createbtn} onCreateBtnClick={handleShowNewEventModal} />
                        </Offcanvas.Body>
                    </Offcanvas>

                    <Col lg={8} md={10} xs={12} className='p-0 list-card'>
                        <Container className='p-0 item-card' style={{ marginTop: '20px' }}>
                            {children}
                        </Container>
                    </Col>

                    {showProposeGroup && (
                        <Col lg={2} md={3} className='p-0 propose d-none d-lg-block'>
                            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Đề xuất Nhóm</p>
                            <ProposeGroup />
                        </Col>
                    )}

                    {showProposeEvent && (
                        <Col lg={2} md={3} className='p-0 propose d-none d-lg-block'>
                            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Đề xuất Sự kiện</p>
                            <ProposeEvent />
                        </Col>
                    )}
                </Row>
            </Container>
            <Footer />

            {/* Hiển thị modal Tạo sự kiện */}
            <NewEventModal
                show={showNewEventModal}
                handleClose={handleCloseNewEventModal}
                handleCreateEvent={handleCreateEvent}
            />
        </Container>
    );
}

export default ListLayout;
