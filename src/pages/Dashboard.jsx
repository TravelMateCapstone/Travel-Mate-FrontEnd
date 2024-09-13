import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Button, Row, Col } from "react-bootstrap";
import '../assets/css/DashBoard/Dashboard.css';
import DestinationCard from "../components/Dashboard/DestinationCard";

function Dashboard() {
  const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng

  // Hàm điều hướng đến trang settings
  const handleNavigateToSettings = () => {
    navigate("/setting");
  };

  // Gọi API và log kết quả
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://travelmateapp.azurewebsites.net/WeatherForecast");
        console.log("API Response:", response.data);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchData();
  }, []); // useEffect chỉ chạy một lần khi component mount

  // Mảng điểm đến
  const destinations = [
    {
      image: "https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA",
      title: "Đà Nẵng",
      description: "Đà Nẵng nổi tiếng với những bãi biển đẹp và Cầu Vàng nổi bật tại Bà Nà Hills, thu hút hàng triệu du khách mỗi năm."
    },
    {
      image: "https://vietmytravel.com/wp-content/uploads/2019/04/vietmytravel_du-l%E1%BB%8Bch-h%C3%A0-n%E1%BB%99i.jpg",
      title: "Hà Nội",
      description: "Thủ đô Hà Nội với hồ Gươm, phố cổ và những di tích lịch sử mang đậm dấu ấn văn hóa Việt Nam."
    },
    {
      image: "https://img.baoninhbinh.org.vn/DATA/ARTICLES/2023/10/7/mang-huong-sac-tay-ninh-den-voi-thu-do-ha-noi-6b07b.jpg",
      title: "Tây Ninh",
      description: "Núi Bà Đen ở Tây Ninh được mệnh danh là 'nóc nhà Nam Bộ', nơi lý tưởng cho những người yêu thích leo núi và khám phá thiên nhiên."
    },
    {
      image: "https://vcdn1-dulich.vnecdn.net/2022/06/01/Hoi-An-VnExpress-5851-16488048-4863-2250-1654057244.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=Z2ea_f0O7kgGZllKmJF92g",
      title: "Hội An",
      description: "Phố cổ Hội An là Di sản Văn hóa Thế giới với kiến trúc cổ kính và nền ẩm thực phong phú."
    },
    {
      image: "https://www.ctydulichhcm.com/wp-content/uploads/2021/03/tour-da-lat-3-ngay-3-dem-tu-tphcm11033.png",
      title: "Đà Lạt",
      description: "Đà Lạt với khí hậu mát mẻ quanh năm, là thành phố của những cánh đồng hoa, rừng thông và hồ nước tuyệt đẹp."
    },
    {
      image: "https://toquoc.mediacdn.vn/280518851207290880/2023/7/28/phu-quoc-cable-car-alamy-mnnpcc-16905319081521387289004.jpg",
      title: "Phú Quốc",
      description: "Đảo Phú Quốc được biết đến với những bãi biển tuyệt đẹp và các khu nghỉ dưỡng sang trọng, lý tưởng cho du khách tìm kiếm sự thư giãn."
    },
  ];
  

  return (
    <>
      {/* Banner section */}
      <div className="banner-container">
        <img
          src="https://png.pngtree.com/thumb_back/fw800/background/20240410/pngtree-vietnam-liberation-day-flags-evironment-vietnamese-image-art-image_15711656.jpg"
          alt="banner"
          className="banner"
        />
        {/* Text and button over the image */}
        <div className="banner-content">
          <h1>Khám phá Việt Nam cùng nhau</h1>
          <p>Cùng nhau đồng hành và khám phá những điều thú vị nhất.</p>
          <Button variant="primary" size="lg" className="btn-explore">Khám phá ngay <i className="bi bi-chevron-right"></i></Button>
        </div>
      </div>

      <Container className="p-0">
        <h1 className="header-section">Điểm đến nổi bật <i className="bi bi-arrow-right-short"></i></h1>
        <Row>
          {destinations.map((destination, index) => (
            <Col key={index} lg={4} md={4} sm={6}>
              <DestinationCard 
                image={destination.image} 
                title={destination.title} 
                description={destination.description} 
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
