// src/layouts/ListLayout.js
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NavBar from '../components/Shared/NavBar';
import Footer from '../components/Shared/Footer';
import Sidebar from '../components/Shared/Sidebar';
import RoutePath from '../routes/RoutePath';
import { useLocation } from 'react-router-dom';

// Định nghĩa các items sidebar cho từng trường hợp
const sidebarItemsEvent = [
    { icon: 'list-circle', title: 'Home EV', path: RoutePath.EVENT },
    { icon: 'people-circle', title: 'Documents', path: RoutePath.GROUP },
    { icon: 'add-circle', title: 'Settings', path: '/settings' }
];

const sidebarItemsGroup = [
    { icon: 'list-circle', title: 'Home GR', path: RoutePath.EVENT },
    { icon: 'people-circle', title: 'Documents', path: RoutePath.GROUP },
    { icon: 'add-circle', title: 'Settings', path: '/settings' }
];

const sidebarItemsDefault = [
    { icon: 'list-circle', title: 'Home', path: RoutePath.EVENT },
    { icon: 'people-circle', title: 'Documents', path: RoutePath.GROUP },
    { icon: 'add-circle', title: 'Settings', path: '/settings' }
];

function ListLayout({ children }) {
    const location = useLocation();

    // Xác định items sidebar dựa trên đường dẫn
    let itemsToDisplay;

    if (location.pathname === RoutePath.EVENT || location.pathname === RoutePath.EVENT_DETAIL) {
        itemsToDisplay = sidebarItemsEvent;
    } else if (location.pathname === RoutePath.GROUP) {
        itemsToDisplay = sidebarItemsGroup;
    } else {
        itemsToDisplay = sidebarItemsDefault;
    }

    return (
        <Container fluid className='p-0 m-0'>
            <NavBar />
            <Container fluid style={{
                marginTop: '122px',
                padding: '0 85px'
            }}>
                <Row>
                    <Col lg={2} className='p-0'>
                        <Sidebar items={itemsToDisplay} />
                    </Col>
                    <Col lg={8} className='p-0'>{children}</Col>
                    <Col lg={2} className='bg-success p-0'>Sidebar</Col>
                </Row>
            </Container>
            <Footer />
        </Container>
    );
}

export default ListLayout;
