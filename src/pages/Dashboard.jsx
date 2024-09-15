import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Button, Row, Col } from "react-bootstrap";
import '../assets/css/DashBoard/Dashboard.css';
import DestinationCard from "../components/Dashboard/DestinationCard";
import banner from '../assets/images/banner.jpeg'
import HostCard from "../components/Dashboard/HostCard";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

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
        const response = await axios.get("https://travelmateapp.azurewebsites.net/odata/ApplicationUsers?$count=true");
        console.log("API Response:", response.data.value.length);
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

  const hosts = [
    {
      avatar: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-1/453485791_1503043053904971_7050613698555539407_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeH9dNwahuSWWMlIFaNwLtwfgpvy7Gq0Ot2Cm_LsarQ63YXL6fkNG_lyFOSLZqPVMpckM5fbx56S1CrHgNZV1_Gv&_nc_ohc=5jKy1lAxpXQQ7kNvgHHA51u&_nc_ht=scontent.fdad3-4.fna&_nc_gid=AQEZs1tbVq2wBKBVEoF54hA&oh=00_AYB51pgpbdIOWAqMYYCY0FDMRIydDwa99YI66_iHr_FNZA&oe=66EA030B",
      name: "Nhơn Trần",
      location: "Quảng Nam"
    },
    {
      avatar: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/449745842_1897469880717181_9200307908320214870_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEaUDrrgrhYIaAHAwrfa5X5T6gmyhL90Z5PqCbKEv3Rnio8q_4Hg4Dxcm96T30mEuFqZ3LiD29zYuLjcLNIEP26&_nc_ohc=RGpH3kE5XdUQ7kNvgGfh_T7&_nc_ht=scontent.fdad3-1.fna&oh=00_AYBzzrB9dqzjbfpEKBaHwfcaiX5MosI4uGVh4alxvn_Neg&oe=66EA2BD0",
      name: "Hải Đăng",
      location: "Quảng Trị"
    },
    {
      avatar: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/422724159_3711517109169888_5660314751144490822_n.jpg?stp=dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeF2CPhBHysBPK6uHGM7JGho75lt6mZr6GjvmW3qZmvoaORlk9rCLtxxZX4oG-eaMRiFUnlt_Z6gwSIQ8QvxIEWJ&_nc_ohc=JlyNhriLj_QQ7kNvgFK5Kuk&_nc_ht=scontent.fdad3-1.fna&_nc_gid=AyuMyMs0uYXEsNDm-qwLNJF&oh=00_AYDKYVRHmfWSU3mqF9MOAmE9P79qDp8GB1LhOWOFpTbvjg&oe=66EA29AC",
      name: "Đăng Lên",
      location: "Quảng Nam"
    },
    {
      avatar: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-1/453485791_1503043053904971_7050613698555539407_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeH9dNwahuSWWMlIFaNwLtwfgpvy7Gq0Ot2Cm_LsarQ63YXL6fkNG_lyFOSLZqPVMpckM5fbx56S1CrHgNZV1_Gv&_nc_ohc=5jKy1lAxpXQQ7kNvgHHA51u&_nc_ht=scontent.fdad3-4.fna&_nc_gid=AQEZs1tbVq2wBKBVEoF54hA&oh=00_AYB51pgpbdIOWAqMYYCY0FDMRIydDwa99YI66_iHr_FNZA&oe=66EA030B",
      name: "Nhơn Trần",
      location: "Quảng Nam"
    },
    {
      avatar: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/449745842_1897469880717181_9200307908320214870_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEaUDrrgrhYIaAHAwrfa5X5T6gmyhL90Z5PqCbKEv3Rnio8q_4Hg4Dxcm96T30mEuFqZ3LiD29zYuLjcLNIEP26&_nc_ohc=RGpH3kE5XdUQ7kNvgGfh_T7&_nc_ht=scontent.fdad3-1.fna&oh=00_AYBzzrB9dqzjbfpEKBaHwfcaiX5MosI4uGVh4alxvn_Neg&oe=66EA2BD0",
      name: "Hải Đăng",
      location: "Quảng Trị"
    },
    {
      avatar: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/422724159_3711517109169888_5660314751144490822_n.jpg?stp=dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeF2CPhBHysBPK6uHGM7JGho75lt6mZr6GjvmW3qZmvoaORlk9rCLtxxZX4oG-eaMRiFUnlt_Z6gwSIQ8QvxIEWJ&_nc_ohc=JlyNhriLj_QQ7kNvgFK5Kuk&_nc_ht=scontent.fdad3-1.fna&_nc_gid=AyuMyMs0uYXEsNDm-qwLNJF&oh=00_AYDKYVRHmfWSU3mqF9MOAmE9P79qDp8GB1LhOWOFpTbvjg&oe=66EA29AC",
      name: "Đăng Lên",
      location: "Quảng Nam"
    },
    {
      avatar: "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-1/453485791_1503043053904971_7050613698555539407_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeH9dNwahuSWWMlIFaNwLtwfgpvy7Gq0Ot2Cm_LsarQ63YXL6fkNG_lyFOSLZqPVMpckM5fbx56S1CrHgNZV1_Gv&_nc_ohc=5jKy1lAxpXQQ7kNvgHHA51u&_nc_ht=scontent.fdad3-4.fna&_nc_gid=AQEZs1tbVq2wBKBVEoF54hA&oh=00_AYB51pgpbdIOWAqMYYCY0FDMRIydDwa99YI66_iHr_FNZA&oe=66EA030B",
      name: "Nhơn Trần",
      location: "Quảng Nam"
    },
    {
      avatar: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/449745842_1897469880717181_9200307908320214870_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEaUDrrgrhYIaAHAwrfa5X5T6gmyhL90Z5PqCbKEv3Rnio8q_4Hg4Dxcm96T30mEuFqZ3LiD29zYuLjcLNIEP26&_nc_ohc=RGpH3kE5XdUQ7kNvgGfh_T7&_nc_ht=scontent.fdad3-1.fna&oh=00_AYBzzrB9dqzjbfpEKBaHwfcaiX5MosI4uGVh4alxvn_Neg&oe=66EA2BD0",
      name: "Hải Đăng",
      location: "Quảng Trị"
    },
    {
      avatar: "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/422724159_3711517109169888_5660314751144490822_n.jpg?stp=dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeF2CPhBHysBPK6uHGM7JGho75lt6mZr6GjvmW3qZmvoaORlk9rCLtxxZX4oG-eaMRiFUnlt_Z6gwSIQ8QvxIEWJ&_nc_ohc=JlyNhriLj_QQ7kNvgFK5Kuk&_nc_ht=scontent.fdad3-1.fna&_nc_gid=AyuMyMs0uYXEsNDm-qwLNJF&oh=00_AYDKYVRHmfWSU3mqF9MOAmE9P79qDp8GB1LhOWOFpTbvjg&oe=66EA29AC",
      name: "Đăng Lên",
      location: "Quảng Nam"
    },
    
];



  return (
    <>
      {/* Banner section */}
      <div className="banner-container">
        <img
          src={banner}
          alt="banner"
          className="banner"
        />
        {/* Text and button over the image */}
        <div className="banner-content">
          <h1>Khám phá Việt Nam cùng nhau</h1>
          <p>Tìm kiếm bạn đồng hành và trải nghiệm những chuyến đi tuyệt vời.</p>
          <Button variant="primary" size="lg" className="btn-explore">Khám phá ngay <i className="bi bi-chevron-right"></i></Button>
        </div>
      </div>

      <Container className="p-0">
        <h1 className="header-section fw-bold">Điểm đến nổi bật <i className="bi bi-arrow-right-short"></i></h1>
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
        <h1 className="header-section fw-bold">Người đồng hành địa phương <i className="bi bi-arrow-right-short"></i></h1>
        <Row>
        <Swiper
            slidesPerView={3.77}
            spaceBetween={10}
            freeMode={true}
            modules={[FreeMode]}
            className="mySwiper"
            breakpoints={{
              0: { slidesPerView: 2.5 },
              768: { slidesPerView: 3.77 }
            }}
          >
            {hosts.map((host, index) => (
              <SwiperSlide key={index}>
                <HostCard
                  avatar={host.avatar}
                  name={host.name}
                  location={host.location}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
