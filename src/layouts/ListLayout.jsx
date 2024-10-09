// src/layouts/ListLayout.js
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import NavBar from '../components/Shared/NavBar';
import Footer from '../components/Shared/Footer';
import Sidebar from '../components/Shared/Sidebar';
import RoutePath from '../routes/RoutePath';
import { useLocation } from 'react-router-dom';
import '../assets/css/layouts/ListLayout.css';

// Định nghĩa các items sidebar cho từng trường hợp
const sidebarItemsEvent = [
    { icon: 'list-circle-sharp', title: 'Danh sách sự kiện', path: RoutePath.EVENT },
    { icon: 'people-circle', title: 'Sự kiện đã tham gia', path: RoutePath.GROUP },
    { icon: 'add-circle', title: 'Sự kiện đã tạo', path: '/settings' }
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

    let itemsToDisplay;
    let createButton = '';

    if (location.pathname === RoutePath.EVENT || location.pathname === RoutePath.EVENT_DETAIL) {
        itemsToDisplay = sidebarItemsEvent;
        createButton = 'Tạo sự kiện';
    } else if (location.pathname === RoutePath.GROUP) {
        itemsToDisplay = sidebarItemsGroup;
        createButton = 'Tạo nhóm mới'
    } else {
        itemsToDisplay = sidebarItemsDefault;
    }

    return (
        <Container fluid className='p-0 m-0'>
            <NavBar />
            <Container className='list-container' fluid>
                <Row className='list-layout-custom'>
                    <Col lg={2} className='p-0'>
                        <Sidebar items={itemsToDisplay} createbtn={createButton} />
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
