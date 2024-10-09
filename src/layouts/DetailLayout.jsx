import React, { useState } from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row, Offcanvas } from 'react-bootstrap';
import NavBar from '../components/Shared/NavBar';
import Footer from '../components/Shared/Footer';
import Sidebar from '../components/Shared/Sidebar';
import RoutePath from '../routes/RoutePath';
import { useLocation } from 'react-router-dom';
import '../assets/css/layouts/DetailLayout.css';
import GroupJoinedList from '../components/Group/GroupJoinedList';

const DetailLayout = ({ children }) => {
    const sidebarItemsEvent = [
        { icon: 'list-circle', title: 'Sự kiện đã tạo', path: RoutePath.EVENT },
        { icon: 'people-circle', title: 'Sự kiện đã tham gia', path: RoutePath.GROUP },
        { icon: 'add-circle', title: 'Settings', path: RoutePath.ADMIN }
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

    const location = useLocation();
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    let itemsToDisplay;
    let createbtn = '';
    let showProposeGroup = false;
    let showProposeEvent = false;
    let showGroupList = false;
    let showSearchFilter = !(location.pathname === RoutePath.JOINGROUPDETAILS || location.pathname === RoutePath.MYGROUPDETAIL);

    if (location.pathname === RoutePath.EVENT || location.pathname === RoutePath.EVENT_DETAIL) {
        itemsToDisplay = sidebarItemsEvent;
        showProposeEvent = true;
    } else if (location.pathname === RoutePath.GROUP || location.pathname === RoutePath.GROUPJOINED || location.pathname === RoutePath.GROUPCREATED || RoutePath.JOINGROUPDETAILS) {
        itemsToDisplay = sidebarItemsGroup;
        showProposeGroup = true;
        if (location.pathname === RoutePath.GROUP) {
            createbtn = 'Tạo nhóm';
        }
        if (location.pathname === RoutePath.JOINGROUPDETAILS || location.pathname === RoutePath.MYGROUPDETAIL) {
            showGroupList = true;
        }
    } else {
        itemsToDisplay = sidebarItemsDefault;
    }

    return (
        <Container fluid className='p-0 m-0'>
            <NavBar />

            <Container fluid className='container-layout-detail'>
                <Row>
                    <Col lg={2} md={3} className='p-0 d-none d-md-block'>
                        <Sidebar items={itemsToDisplay} createBtn={createbtn} isShowGroupList={showGroupList} />
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
                            <Sidebar items={itemsToDisplay} createBtn={createbtn} />
                            {/* Search input only if not on /joingroupdetails */}
                            {showSearchFilter && (
                                <InputGroup className='search-list-container mt-3'>
                                    <InputGroup.Text className="search-icon search-icon-list">
                                        <ion-icon name="search-outline"></ion-icon>
                                    </InputGroup.Text>
                                    <FormControl
                                        type="search"
                                        placeholder="Nhập từ khóa"
                                        aria-label="Search"
                                        className="searchBar-list"
                                    />
                                </InputGroup>
                            )}
                            {/* Flex container for location and filter button */}
                            {showSearchFilter && (
                                <div className="d-flex align-items-center mt-2">
                                    <InputGroup className='search-list-container location-container'>
                                        <InputGroup.Text className="search-icon search-icon-list">
                                            <ion-icon name="location-outline"></ion-icon>
                                        </InputGroup.Text>
                                        <FormControl
                                            type="search"
                                            placeholder="Địa điểm"
                                            aria-label="Search"
                                            className="searchBar-list"
                                        />
                                    </InputGroup>
                                    <Button variant='outline-dark' className='d-flex align-items-center gap-2 rounded-5 btn-filter ms-2'>
                                        <ion-icon name="filter-outline"></ion-icon>
                                        Lọc
                                    </Button>
                                </div>
                            )}

                            {showGroupList && (
                                <GroupJoinedList />
                            )}
                        </Offcanvas.Body>
                    </Offcanvas>

                    <Col lg={10} md={9} className='p-0'>
                        {/* Search and Filter on large screens */}
                        {showSearchFilter && (
                            <Container className='container-detail d-none d-md-flex'>
                                <InputGroup className='search-list-container'>
                                    <InputGroup.Text className="search-icon search-icon-list">
                                        <ion-icon name="search-outline"></ion-icon>
                                    </InputGroup.Text>
                                    <FormControl
                                        type="search"
                                        placeholder="Nhập từ khóa"
                                        aria-label="Search"
                                        className="searchBar-list"
                                    />
                                </InputGroup>

                                <InputGroup className='search-list-container location-container'>
                                    <InputGroup.Text className="search-icon search-icon-list">
                                        <ion-icon name="location-outline"></ion-icon>
                                    </InputGroup.Text>
                                    <FormControl
                                        type="search"
                                        placeholder="Địa điểm"
                                        aria-label="Search"
                                        className="searchBar-list"
                                    />
                                </InputGroup>

                                <Button variant='outline-dark' className='d-flex align-items-center gap-2 rounded-5 btn-filter'>
                                    <ion-icon name="filter-outline"></ion-icon>
                                    Lọc
                                </Button>
                            </Container>
                        )}

                        <Container className='p-0'>
                            {children}
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Container>
    );
}

export default DetailLayout;
