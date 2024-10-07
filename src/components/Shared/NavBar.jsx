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
import chatbubble from '../../assets/images/chatbubbles.svg'
import notify from '../../assets/images/notify.svg'
import search from '../../assets/images/search.svg'
import dropdown_arrow from '../../assets/images/dropdown-arrow.svg'
import NotifyItem from "./NotifyItem";
import MessengerItem from "./MessengerItem";
function NavBar() {

  // Danh sách các thông báo
  const notifications = [
    {
      "id": 1,
      "isRequest": true,
      "avatar": "https://cdn.oneesports.vn/cdn-data/sites/4/2024/01/Zed_38.jpg",
      "content": "Bạn có một yêu cầu kết bạn",
      "name": "Sơn Tùng MTP"
    },
    {
      "id": 2,
      "isRequest": false,
      "avatar": "https://cdn.oneesports.vn/cdn-data/sites/4/2024/01/Zed_38.jpg",
      "content": "Tin nhắn từ nhóm",
      "name": "Sơn Tùng MTP"
    },
    {
      "id": 3,
      "isRequest": true,
      "avatar": "https://cdn.oneesports.vn/cdn-data/sites/4/2024/01/Zed_38.jpg",
      "content": "Yêu cầu tham gia sự kiện",
      "name": "Sơn Tùng MTP"
    }
  ];

  const messages = [
    {
      id: 1,
      avatar: 'https://yt3.googleusercontent.com/oN0p3-PD3HUzn2KbMm4fVhvRrKtJhodGlwocI184BBSpybcQIphSeh3Z0i7WBgTq7e12yKxb=s900-c-k-c0x00ffffff-no-rj',
      name: 'Sơn Tùng MTP',
      message: 'Hello, how are you? ',
      time: '10:30 AM',
    },
    {
      id: 2,
      avatar: 'https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-1/449745842_1897469880717181_9200307908320214870_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=OY47WDOKti8Q7kNvgHAx1Z4&_nc_ht=scontent.fdad3-6.fna&_nc_gid=AdEQ0a2R069jDgSfoAU8gv_&oh=00_AYDi_X6IkCeKWDGy62eicx36vg9pDAdIxfCbo6S8-zaHTQ&oe=6709CFD0',
      name: 'Boy Quảng Trị',
      message: 'Let’s meet up this weekend!',
      time: '09:45 AM',
    },
    {
      id: 3,
      avatar: 'https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-1/422724159_3711517109169888_5660314751144490822_n.jpg?stp=dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=KonJzqpqpz0Q7kNvgEDDG2X&_nc_ht=scontent.fdad3-6.fna&_nc_gid=AaoaoA2pZvmm7BqmuZZUnlI&oh=00_AYD2EEv_EmBz23iTyPZ2wAkHxBLhtueHIRQYpVL_mVr57g&oe=6709CDAC',
      name: 'Đăng Lên',
      message: 'I’ve sent you the document.',
      time: 'Yesterday',
    },
    {
      id: 4,
      avatar: 'https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-1/422724159_3711517109169888_5660314751144490822_n.jpg?stp=dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=KonJzqpqpz0Q7kNvgEDDG2X&_nc_ht=scontent.fdad3-6.fna&_nc_gid=AaoaoA2pZvmm7BqmuZZUnlI&oh=00_AYD2EEv_EmBz23iTyPZ2wAkHxBLhtueHIRQYpVL_mVr57g&oe=6709CDAC',
      name: 'Đăng Lên',
      message: 'I’ve sent you the document.',
      time: 'Yesterday',
    },
    {
      id: 5,
      avatar: 'https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-1/422724159_3711517109169888_5660314751144490822_n.jpg?stp=dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=KonJzqpqpz0Q7kNvgEDDG2X&_nc_ht=scontent.fdad3-6.fna&_nc_gid=AaoaoA2pZvmm7BqmuZZUnlI&oh=00_AYD2EEv_EmBz23iTyPZ2wAkHxBLhtueHIRQYpVL_mVr57g&oe=6709CDAC',
      name: 'Đăng Lên',
      message: 'I’ve sent you the document.',
      time: 'Yesterday',
    },
  ];

  const [dropdownValue, setDropdownValue] = useState("Địa điểm du lịch");
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
      <Navbar bg="white" expand="lg" className="p-1 navbar-custom" fixed="top">
        <Container fluid className="p-0 m-0">
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
                <Form className="d-none d-md-flex align-items-center w-100">
                  <InputGroup style={{
                    flexWrap: 'nowrap'
                  }}>
                    <InputGroup.Text className="search-icon">
                      <ion-icon name="search-outline"></ion-icon>
                    </InputGroup.Text>
                    <FormControl
                      type="search"
                      placeholder="Nhập từ khóa"
                      aria-label="Search"
                      className="searchBar"
                    />
                  </InputGroup>
                  <Dropdown as={ButtonGroup} onSelect={handleSelect}>
                    <Dropdown.Toggle id="dropdown-custom-1" variant="white" className="text-dropdown text-black rounded-start-0">
                      <div className="vertical-line" style={{
                        paddingRight: '10px'
                      }}>
                        <div className="line"
                        >|</div>
                      </div>
                      {dropdownValue}
                      <img src={dropdown_arrow} alt="icon dropdown" />

                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-search-menu">
                      <Dropdown.Item eventKey="Địa điểm du lịch" className="p-0 search-dropdown-item">
                        <div>
                          <p className="m-0 dropdown-search-text">Địa điểm du lịch</p>
                        </div>
                        <small>Khám phá điểm đến thú vị</small>
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="Người địa phương" className="p-0 search-dropdown-item">
                        <div>
                          <p className="m-0 dropdown-search-text">Người địa phương</p>
                        </div>
                        <small>Tìm bạn cùng khám phá thành phố</small>
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="Khách du lịch" className="p-0 search-dropdown-item">
                        <div>
                          <p className="m-0 dropdown-search-text">Khách du lịch</p>
                        </div>
                        <small>Kết nối với bạn để trải nghiệm</small>
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
                  className={`text-nowrap  ${location.pathname === RoutePath.DASHBOARD ? "active" : ""
                    }`}
                >
                  Trang chủ
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={RoutePath.EVENT}
                  className={`text-nowrap  ${location.pathname === RoutePath.EVENT ? "active" : ""
                    }`}
                >
                  Sự kiện
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={RoutePath.GROUP}
                  className={`text-nowrap  ${location.pathname === RoutePath.GROUP ? "active" : ""
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
              <Nav className="d-flex align-items-center flex-row gap-3">
                {isAuthenticated ? (
                  <>
                    <Dropdown align="end">
                      <Dropdown.Toggle className="messages_action bg-white rounded-5 border-0 d-flex justify-content-center align-items-center">
                        <img src={chatbubble} alt="" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="py-3 messenger-dropdown-menu">
                        {messages.map((message) => (
                          <Dropdown.Item key={message.id} href={`#message${message.id}`} className="px-3 py-2">
                            <MessengerItem
                              avatar={message.avatar}
                              name={message.name}
                              message={message.message}
                              time={message.time}
                            />
                          </Dropdown.Item>
                        ))}
                        <div className="d-flex align-items-center justify-content-center">
                          <p className="m-0 messege-more">Mở tin nhắn</p>
                          <ion-icon name="chevron-forward-circle-outline"></ion-icon>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown align="end">
                      <Dropdown.Toggle className="notify_action bg-white rounded-5 border-0 d-flex justify-content-center align-items-center">
                        <img src={notify} alt="notify" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="py-3 dropdown-menu-notify">
                        {notifications.map((notification) => (
                          <Dropdown.Item key={notification.id} href={`#notification${notification.id}`}>
                            <NotifyItem avatar={notification.avatar} content={notification.content} isRequest={notification.isRequest} name={notification.name} />
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown align="end">
                      <Dropdown.Toggle className="avatar bg-secondary rounded-5 border-0 p-0 d-flex justify-content-between px-2 align-items-center gap-0">
                        <img
                          className="object-fit-cover rounded-5"
                          src="https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-1/449745842_1897469880717181_9200307908320214870_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=Y3ls6zXN1FkQ7kNvgHaVl16&_nc_ht=scontent.fdad1-3.fna&_nc_gid=Ast3ANCkPa-DxFkrY9dgnTq&oh=00_AYBe08CtFb4taXCbRVq4JOQjHc2uuRLLLvpkYfxQ1B_SFg&oe=67087E50"
                          alt="avatar"
                        />

                        <i className="bi bi-list fs-5 text-black"></i>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="p-1 avatar-dropdown" >
                        <Dropdown.Item as={Link} to={RoutePath.PROFILE} className="avatar-dropdown-item">
                          Hồ sơ
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to={RoutePath.SETTING} className="avatar-dropdown-item">
                          Trang quản lý
                        </Dropdown.Item>
                        <Dropdown.Divider style={{
                          marginBottom: '24px'
                        }} />
                        <Dropdown.Item onClick={handleLogout} className="avatar-dropdown-item">
                          Cài đặt
                        </Dropdown.Item>
                        <Dropdown.Item onClick={handleLogout} className="avatar-dropdown-item mb-0">
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
                  className="w-100 search-dropdown-mb p-2"
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

            <Nav className="d-flex flex-column">
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
