import React, { memo, useState } from "react";
import logo from '../../assets/images/logo.png'
import {
  Col,
  Navbar,
  Row,
  Container,
  Form,
  InputGroup,
  FormControl,
  Nav,
  Dropdown,
  ButtonGroup,
  Button,
  Offcanvas
} from "react-bootstrap";
import '../../assets/css/Shared/NavBar.css';
import { Link } from "react-router-dom";
import RoutePath from "../../routes/RoutePath";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/authActions";

function NavBar() {
  const [dropdownValue, setDropdownValue] = useState("Tìm kiếm");
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated); // Access auth state
 
  const [showCanvas, setShowCanvas] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);


  const handleSelect = (eventKey) => {
    setDropdownValue(eventKey);
  };
  const dispatch = useDispatch();
  const toggleCanvas = () => setShowCanvas(!showCanvas);
  const handleLoginModal = () => setShowLoginModal(!showLoginModal);
  const toggleRegisterModal = () => setShowRegisterModal(!showRegisterModal);

   // Function to handle successful login
   const handleLoginSuccess = () => {
    setIsAuthenticated(true); // Set authentication to true after login
    setShowLoginModal(false); // Close the login modal
  };
  const handleLogout = () => {
    dispatch(logout()); 
  };




  return (
    <Container>
      <Navbar bg="light" expand="lg" className="shadow p-1" fixed="top">
        <Container fluid className="p-0">
          <Row className="w-100 align-items-center justify-content-between">
            {/* Left Side */}
            <Col lg={4} md={6} sm={6} xs={6} className="d-flex justify-content-start">
              <div className="d-flex align-items-center">
                <Navbar.Brand href="/" className="me-0 ms-3">
                  <img
                    src={logo}
                    alt="Logo"
                    width="40"
                    height="40"
                    className="d-inline-block align-top rounded-5"
                  />
                </Navbar.Brand>

                <Form className="d-none d-md-flex w-100">
                  <Dropdown as={ButtonGroup} onSelect={handleSelect}>
                    <Dropdown.Toggle id="dropdown-custom-1" variant="primary" className="search-dropdown">
                      {dropdownValue}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="Traveler">Traveler</Dropdown.Item>
                      <Dropdown.Item eventKey="Local">Local</Dropdown.Item>
                      <Dropdown.Item eventKey="Destination">Destination</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <InputGroup>
                    <FormControl
                      type="search"
                      placeholder="Nhập từ khóa"
                      aria-label="Search"
                      className="border searchBar"
                    />
                  </InputGroup>
                </Form>
              </div>
            </Col>

            <Col lg={4} className="d-none d-lg-flex justify-content-center my-2 my-md-0 p-0">
              <Nav className="d-flex justify-content-center flex-row gap-2 fw-bold">
                <Nav.Link as={Link} to={RoutePath.DASHBOARD} className="text-nowrap fw-semibold">Trang chủ</Nav.Link>
                <Nav.Link as={Link} to={RoutePath.EVENT} className="text-nowrap fw-semibold">Sự kiện</Nav.Link>
                <Nav.Link as={Link} to={RoutePath.GROUP} className="text-nowrap fw-semibold">Nhóm</Nav.Link>
                <Nav.Link as={Link} to={RoutePath.SETTING} className="text-nowrap fw-semibold">Cài đặt</Nav.Link>
              </Nav>
            </Col>

            <Col lg={4} md={6} sm={6} xs={6} className="d-flex justify-content-end p-0">
              <Nav className="d-flex align-items-center flex-row gap-1">
                {isAuthenticated ? (
                  <>
                    <Dropdown align='end'>
                      <Dropdown.Toggle className="messages_action bg-secondary rounded-5 border-0">
                        <i className="bi bi-messenger fs-6"></i>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#message1">Message 1</Dropdown.Item>
                        <Dropdown.Item href="#message2">Message 2</Dropdown.Item>
                        <Dropdown.Item href="#message3">Message 3</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown align='end'>
                      <Dropdown.Toggle className="notify_action bg-secondary rounded-5 border-0">
                        <i className="bi bi-bell-fill fs-6"></i>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#notification1">Notification 1</Dropdown.Item>
                        <Dropdown.Item href="#notification2">Notification 2</Dropdown.Item>
                        <Dropdown.Item href="#notification3">Notification 3</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown align='end'>
                      <Dropdown.Toggle className="avatar bg-secondary rounded-5 border-0 p-0">
                        <img
                          height={40}
                          width={40}
                          className="object-fit-cover rounded-5"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRez3lFozeHy6f4R0eoyEaIlM5lunDXiEbICA&s"
                          alt="avatar"
                        />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item as={Link} to={RoutePath.PROFILE}>
                          Hồ sơ
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to={RoutePath.SETTING}>
                          Cài đặt
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={handleLogout}>Đăng xuất</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    {/* Offcanvas Button visible on md and below */}
                    <Button variant="link" className="p-0 d-lg-none text-black" onClick={toggleCanvas} style={{ height: '50px', width: '50px' }}>
                      <i className="bi bi-list fs-1"></i>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="" onClick={handleLoginModal} style={{background: '#4763c8', color: 'white', textWrap: "nowrap"}} className="fw-bold">
                      Đăng nhập
                    </Button>
                    <Button variant="" onClick={toggleRegisterModal} style={{background: '#DF6B00', color: 'white', textWrap: "nowrap"}} className="fw-bold">
                      Đăng kí
                    </Button>
                  </>
                )}
              </Nav>
            </Col>
          </Row>
        </Container>

        <Offcanvas show={showCanvas} onHide={toggleCanvas} placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form className="mb-4 d-flex align-items-center">
              <Dropdown as={ButtonGroup} onSelect={handleSelect}>
                <Dropdown.Toggle id="dropdown-custom-1" variant="primary" className="w-100 search-dropdown-mb">
                  {dropdownValue}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Traveler">Traveler</Dropdown.Item>
                  <Dropdown.Item eventKey="Local">Local</Dropdown.Item>
                  <Dropdown.Item eventKey="Destination">Destination</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <InputGroup>
                <FormControl
                  type="search"
                  placeholder="Nhập từ khóa"
                  aria-label="Search"
                  className="border searchBar"
                />
              </InputGroup>
            </Form>

            <Nav className="d-flex flex-column gap-3">
              <Nav.Link as={Link} to={RoutePath.DASHBOARD} onClick={toggleCanvas}>Trang chủ</Nav.Link>
              <Nav.Link as={Link} to={RoutePath.EVENT} onClick={toggleCanvas}>Sự kiện</Nav.Link>
              <Nav.Link as={Link} to={RoutePath.GROUP} onClick={toggleCanvas}>Nhóm</Nav.Link>
              <Nav.Link as={Link} to={RoutePath.SETTING} onClick={toggleCanvas}>Cài đặt</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>

        {/* Login Modal */}
        <Login show={showLoginModal} handleClose={handleLoginModal} />


      <Register show={showRegisterModal} handleClose={toggleRegisterModal} />
    </Container>
  );
}

export default memo(NavBar);
