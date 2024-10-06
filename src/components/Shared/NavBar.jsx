import React, { memo, useState } from "react";
import logo from "../../assets/images/logo.png";
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
  Offcanvas,
} from "react-bootstrap";
import "../../assets/css/Shared/NavBar.css";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import RoutePath from "../../routes/RoutePath";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/authActions";

import { openLoginModal, closeLoginModal, openRegisterModal, closeRegisterModal } from "../../redux/actions/modalActions";

function NavBar() {
  const [dropdownValue, setDropdownValue] = useState("Người địa phương");
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLoginModalOpen = useSelector((state) => state.modal.isLoginModalOpen);
  const isRegisterModalOpen = useSelector((state) => state.modal.isRegisterModalOpen);
  const [showCanvas, setShowCanvas] = useState(false);
  const location = useLocation(); // Lấy đường dẫn hiện tại
  const handleSelect = (eventKey) => {
    setDropdownValue(eventKey);
  };
  const dispatch = useDispatch();
  const toggleCanvas = () => setShowCanvas(!showCanvas);
  const handleLoginModal = () => {
    if (isLoginModalOpen) {
      dispatch(closeLoginModal());
    } else {
      dispatch(openLoginModal());
    }
  };

  const handleRegisterModal = () => {
    if (isRegisterModalOpen) {
      dispatch(closeRegisterModal());
    } else {
      dispatch(openRegisterModal());
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Container>
      <Navbar bg="light" expand="lg" className="shadow p-1 navbar-custom" fixed="top">
        <Container fluid className="p-0">
          <Row className="w-100 align-items-center justify-content-between">
            <Col
              lg={4}
              md={6}
              sm={6}
              xs={6}
              className="d-flex justify-content-start"
            >
              <div className="d-flex align-items-center">
                <Navbar.Brand
                  href="/Travel-Mate-FrontEnd/"
                  className="me-0 ms-3"
                >
                  <img
                    src={logo}
                    alt="Logo"
                    className="d-inline-block align-top rounded-5 logo"
                  />
                </Navbar.Brand>
                <Form className="d-none d-md-flex w-100">
                  <InputGroup>
                    <InputGroup.Text className="search-icon">
                      <i className="bi bi-search"></i>
                    </InputGroup.Text>
                    <FormControl
                      type="search"
                      placeholder="Nhập từ khóa"
                      aria-label="Search"
                      className="border searchBar"
                    />
                  </InputGroup>
                  <Dropdown as={ButtonGroup} onSelect={handleSelect}>
                    <Dropdown.Toggle
                      id="dropdown-custom-1"
                      variant="secondary"
                      className="search-dropdown text-dropdown text-black rounded-start-0"
                    >
                      {dropdownValue}
                      <i className="bi bi-chevron-down ms-2"></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="p-0">
                      <Dropdown.Item eventKey="Người địa phương">
                        <div>
                          <p className="m-0">
                            <i className="bi bi-people"></i> Người địa phương
                          </p>
                        </div>
                        <small>ㅤTìm bạn cùng khám phá thành phố</small>
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="Khách du lịch">
                        <div>
                          <p className="m-0">
                            <i className="bi bi-backpack"></i> Khách du lịch
                          </p>
                        </div>
                        <small>ㅤKết nối với bạn để trải nghiệm</small>
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="Địa điểm du lịch">
                        <div>
                          <p className="m-0">
                            <i className="bi bi-geo"></i> Địa điểm du lịch
                          </p>
                        </div>
                        <small>ㅤKhám phá điểm đến thú vị</small>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Form>

              </div>
            </Col>

            <Col
              lg={4}
              className="d-none d-lg-flex justify-content-center my-2 my-md-0 p-0"
            >
              <Nav className="d-flex justify-content-center flex-row gap-2 fw-bold">
                <Nav.Link
                  as={Link}
                  to={RoutePath.DASHBOARD}
                  className={`text-nowrap fw-light ${location.pathname === RoutePath.DASHBOARD ? "active" : ""
                    }`}
                >
                  Trang chủ
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={RoutePath.EVENT}
                  className={`text-nowrap fw-light ${location.pathname === RoutePath.EVENT ? "active" : ""
                    }`}
                >
                  Sự kiện
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={RoutePath.GROUP}
                  className={`text-nowrap fw-light ${location.pathname === RoutePath.GROUP ? "active" : ""
                    }`}
                >
                  Nhóm
                </Nav.Link>
              </Nav>
            </Col>

            <Col
              lg={4}
              md={6}
              sm={6}
              xs={6}
              className="d-flex justify-content-end p-0"
            >
              <Nav className="d-flex align-items-center flex-row gap-1">
                {isAuthenticated ? (
                  <>
                    <Dropdown align="end">
                      <Dropdown.Toggle className="messages_action bg-secondary rounded-5 border-0 d-flex justify-content-center align-items-center">
                        <i className="bi bi-messenger icon-action"></i>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="p-0">
                        <Dropdown.Item href="#message1">
                          Message 1
                        </Dropdown.Item>
                        <Dropdown.Item href="#message2">
                          Message 2
                        </Dropdown.Item>
                        <Dropdown.Item href="#message3">
                          Message 3
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown align="end">
                      <Dropdown.Toggle className="notify_action bg-secondary rounded-5 border-0 d-flex justify-content-center align-items-center">
                        <i className="bi bi-bell-fill icon-action"></i>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="p-0">
                        <Dropdown.Item href="#notification1">
                          Notification 1
                        </Dropdown.Item>
                        <Dropdown.Item href="#notification2">
                          Notification 2
                        </Dropdown.Item>
                        <Dropdown.Item href="#notification3">
                          Notification 3
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown align="end">
                      <Dropdown.Toggle className="avatar bg-secondary rounded-5 border-0 p-0 d-flex justify-content-center align-items-center gap-0">
                        <img
                          className="object-fit-cover rounded-5"
                          src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-1/449745842_1897469880717181_9200307908320214870_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=Y3ls6zXN1FkQ7kNvgHaVl16&_nc_ht=scontent.fdad1-3.fna&_nc_gid=Ast3ANCkPa-DxFkrY9dgnTq&oh=00_AYBe08CtFb4taXCbRVq4JOQjHc2uuRLLLvpkYfxQ1B_SFg&oe=67087E50"
                          alt="avatar"
                        />

                        <i className="bi bi-list fs-3 text-black"></i>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="p-0">
                        <Dropdown.Item as={Link} to={RoutePath.PROFILE}>
                          Hồ sơ
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to={RoutePath.SETTING}>
                          Cài đặt
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={handleLogout}>
                          Đăng xuất
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Button
                      variant="link"
                      className="p-0 d-lg-none text-black btn-canvas"
                      onClick={toggleCanvas}
                    >
                      <i className="bi bi-list fs-1"></i>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant=""
                      onClick={handleRegisterModal}
                      className="btn-register fw-medium"
                    >
                      Đăng kí
                    </Button>
                    <Button
                      variant=""
                      onClick={handleLoginModal}
                      className="btn-login fw-medium"
                    >
                      Đăng nhập
                    </Button>
                    <Button
                      variant="link"
                      className="p-0 d-lg-none text-black btn-canvas"
                      onClick={toggleCanvas}
                    >
                      <i className="bi bi-list fs-1"></i>
                    </Button>
                  </>
                )}
              </Nav>
            </Col>
          </Row>
        </Container>

        <Offcanvas show={showCanvas} onHide={toggleCanvas} placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="fw-bold">
              <img src={logo} alt="logo" className="logo" />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form className="mb-4 d-flex align-items-center">
              <Dropdown as={ButtonGroup} onSelect={handleSelect}>
                <Dropdown.Toggle
                  id="dropdown-custom-1"
                  variant="primary"
                  className="w-100 search-dropdown-mb"
                >
                  {dropdownValue}
                  <i className="bi bi-chevron-down ms-2"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Người địa phương">
                    <div>
                      <p className="m-0 drop-title">
                        <i className="bi bi-people"></i> Người địa phương
                      </p>
                    </div>
                    <small className="drop-sub">
                      ㅤTìm bạn cùng khám phá thành phố
                    </small>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Khách du lịch">
                    <div>
                      <p className="m-0 drop-title">
                        <i className="bi bi-backpack"></i> Khách du lịch
                      </p>
                    </div>
                    <small className="drop-sub">
                      ㅤKết nối với bạn để trải nghiệm
                    </small>
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="Địa điểm du lịch">
                    <div>
                      <p className="m-0 drop-title">
                        <i className="bi bi-geo"></i> Địa điểm du lịch
                      </p>
                    </div>
                    <small className="drop-sub">ㅤKhám phá điểm đến thú vị</small>
                  </Dropdown.Item>
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
              <Nav.Link as={Link} to={RoutePath.DASHBOARD} onClick={toggleCanvas}>
                Trang chủ
              </Nav.Link>
              <Nav.Link as={Link} to={RoutePath.EVENT} onClick={toggleCanvas}>
                Sự kiện
              </Nav.Link>
              <Nav.Link as={Link} to={RoutePath.GROUP} onClick={toggleCanvas}>
                Nhóm
              </Nav.Link>
              <Nav.Link as={Link} to={RoutePath.SETTING} onClick={toggleCanvas}>
                Cài đặt
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
      <Login show={isLoginModalOpen} handleClose={handleLoginModal} />
      <Register show={isRegisterModalOpen} handleClose={handleRegisterModal} />
    </Container>
  );
}

export default memo(NavBar);
