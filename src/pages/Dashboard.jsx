import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Button, Row, Col, Carousel } from "react-bootstrap";
import "../assets/css/DashBoard/Dashboard.css";
import banner from "../assets/images/banner.jpeg";
import HostCard from "../components/Dashboard/HostCard";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
// import required modules
import { Mousewheel, FreeMode, Pagination } from "swiper/modules";
import PostCard from "../components/Dashboard/PostCard";
import FixedActionMenu from "../components/Dashboard/FixedActionMenu";
import EventSlide from "../components/Dashboard/EventSlide";

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
        const response = await axios.get(
          "https://travelmateapp.azurewebsites.net/odata/ApplicationUsers?$count=true"
        );
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
      image:
        "https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA",
      title: "Đà Nẵng",
      description:
        "Đà Nẵng nổi tiếng với những bãi biển đẹp và Cầu Vàng nổi bật tại Bà Nà Hills, thu hút hàng triệu du khách mỗi năm.",
    },
    {
      image:
        "https://vietmytravel.com/wp-content/uploads/2019/04/vietmytravel_du-l%E1%BB%8Bch-h%C3%A0-n%E1%BB%99i.jpg",
      title: "Hà Nội",
      description:
        "Thủ đô Hà Nội với hồ Gươm, phố cổ và những di tích lịch sử mang đậm dấu ấn văn hóa Việt Nam.",
    },
    {
      image:
        "https://img.baoninhbinh.org.vn/DATA/ARTICLES/2023/10/7/mang-huong-sac-tay-ninh-den-voi-thu-do-ha-noi-6b07b.jpg",
      title: "Tây Ninh",
      description:
        "Núi Bà Đen ở Tây Ninh được mệnh danh là 'nóc nhà Nam Bộ', nơi lý tưởng cho những người yêu thích leo núi và khám phá thiên nhiên.",
    },
    {
      image:
        "https://vcdn1-dulich.vnecdn.net/2022/06/01/Hoi-An-VnExpress-5851-16488048-4863-2250-1654057244.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=Z2ea_f0O7kgGZllKmJF92g",
      title: "Hội An",
      description:
        "Phố cổ Hội An là Di sản Văn hóa Thế giới với kiến trúc cổ kính và nền ẩm thực phong phú.",
    },
    {
      image:
        "https://www.ctydulichhcm.com/wp-content/uploads/2021/03/tour-da-lat-3-ngay-3-dem-tu-tphcm11033.png",
      title: "Đà Lạt",
      description:
        "Đà Lạt với khí hậu mát mẻ quanh năm, là thành phố của những cánh đồng hoa, rừng thông và hồ nước tuyệt đẹp.",
    },
    {
      image:
        "https://toquoc.mediacdn.vn/280518851207290880/2023/7/28/phu-quoc-cable-car-alamy-mnnpcc-16905319081521387289004.jpg",
      title: "Phú Quốc",
      description:
        "Đảo Phú Quốc được biết đến với những bãi biển tuyệt đẹp và các khu nghỉ dưỡng sang trọng, lý tưởng cho du khách tìm kiếm sự thư giãn.",
    },
  ];

  const hosts = [
    {
      avatar:
        "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-1/453485791_1503043053904971_7050613698555539407_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeH9dNwahuSWWMlIFaNwLtwfgpvy7Gq0Ot2Cm_LsarQ63YXL6fkNG_lyFOSLZqPVMpckM5fbx56S1CrHgNZV1_Gv&_nc_ohc=5jKy1lAxpXQQ7kNvgHHA51u&_nc_ht=scontent.fdad3-4.fna&_nc_gid=AQEZs1tbVq2wBKBVEoF54hA&oh=00_AYB51pgpbdIOWAqMYYCY0FDMRIydDwa99YI66_iHr_FNZA&oe=66EA030B",
      name: "Nhơn Trần",
      location: "Quảng Nam",
    },
    {
      avatar:
        "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/449745842_1897469880717181_9200307908320214870_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEaUDrrgrhYIaAHAwrfa5X5T6gmyhL90Z5PqCbKEv3Rnio8q_4Hg4Dxcm96T30mEuFqZ3LiD29zYuLjcLNIEP26&_nc_ohc=RGpH3kE5XdUQ7kNvgGfh_T7&_nc_ht=scontent.fdad3-1.fna&oh=00_AYBzzrB9dqzjbfpEKBaHwfcaiX5MosI4uGVh4alxvn_Neg&oe=66EA2BD0",
      name: "Hải Đăng",
      location: "Quảng Trị",
    },
    {
      avatar:
        "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/422724159_3711517109169888_5660314751144490822_n.jpg?stp=dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeF2CPhBHysBPK6uHGM7JGho75lt6mZr6GjvmW3qZmvoaORlk9rCLtxxZX4oG-eaMRiFUnlt_Z6gwSIQ8QvxIEWJ&_nc_ohc=JlyNhriLj_QQ7kNvgFK5Kuk&_nc_ht=scontent.fdad3-1.fna&_nc_gid=AyuMyMs0uYXEsNDm-qwLNJF&oh=00_AYDKYVRHmfWSU3mqF9MOAmE9P79qDp8GB1LhOWOFpTbvjg&oe=66EA29AC",
      name: "Đăng Lên",
      location: "Quảng Nam",
    },
    {
      avatar:
        "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-1/453485791_1503043053904971_7050613698555539407_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeH9dNwahuSWWMlIFaNwLtwfgpvy7Gq0Ot2Cm_LsarQ63YXL6fkNG_lyFOSLZqPVMpckM5fbx56S1CrHgNZV1_Gv&_nc_ohc=5jKy1lAxpXQQ7kNvgHHA51u&_nc_ht=scontent.fdad3-4.fna&_nc_gid=AQEZs1tbVq2wBKBVEoF54hA&oh=00_AYB51pgpbdIOWAqMYYCY0FDMRIydDwa99YI66_iHr_FNZA&oe=66EA030B",
      name: "Nhơn Trần",
      location: "Quảng Nam",
    },
    {
      avatar:
        "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/449745842_1897469880717181_9200307908320214870_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEaUDrrgrhYIaAHAwrfa5X5T6gmyhL90Z5PqCbKEv3Rnio8q_4Hg4Dxcm96T30mEuFqZ3LiD29zYuLjcLNIEP26&_nc_ohc=RGpH3kE5XdUQ7kNvgGfh_T7&_nc_ht=scontent.fdad3-1.fna&oh=00_AYBzzrB9dqzjbfpEKBaHwfcaiX5MosI4uGVh4alxvn_Neg&oe=66EA2BD0",
      name: "Hải Đăng",
      location: "Quảng Trị",
    },
    {
      avatar:
        "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/422724159_3711517109169888_5660314751144490822_n.jpg?stp=dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeF2CPhBHysBPK6uHGM7JGho75lt6mZr6GjvmW3qZmvoaORlk9rCLtxxZX4oG-eaMRiFUnlt_Z6gwSIQ8QvxIEWJ&_nc_ohc=JlyNhriLj_QQ7kNvgFK5Kuk&_nc_ht=scontent.fdad3-1.fna&_nc_gid=AyuMyMs0uYXEsNDm-qwLNJF&oh=00_AYDKYVRHmfWSU3mqF9MOAmE9P79qDp8GB1LhOWOFpTbvjg&oe=66EA29AC",
      name: "Đăng Lên",
      location: "Quảng Nam",
    },
    {
      avatar:
        "https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-1/453485791_1503043053904971_7050613698555539407_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeH9dNwahuSWWMlIFaNwLtwfgpvy7Gq0Ot2Cm_LsarQ63YXL6fkNG_lyFOSLZqPVMpckM5fbx56S1CrHgNZV1_Gv&_nc_ohc=5jKy1lAxpXQQ7kNvgHHA51u&_nc_ht=scontent.fdad3-4.fna&_nc_gid=AQEZs1tbVq2wBKBVEoF54hA&oh=00_AYB51pgpbdIOWAqMYYCY0FDMRIydDwa99YI66_iHr_FNZA&oe=66EA030B",
      name: "Nhơn Trần",
      location: "Quảng Nam",
    },
    {
      avatar:
        "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/449745842_1897469880717181_9200307908320214870_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEaUDrrgrhYIaAHAwrfa5X5T6gmyhL90Z5PqCbKEv3Rnio8q_4Hg4Dxcm96T30mEuFqZ3LiD29zYuLjcLNIEP26&_nc_ohc=RGpH3kE5XdUQ7kNvgGfh_T7&_nc_ht=scontent.fdad3-1.fna&oh=00_AYBzzrB9dqzjbfpEKBaHwfcaiX5MosI4uGVh4alxvn_Neg&oe=66EA2BD0",
      name: "Hải Đăng",
      location: "Quảng Trị",
    },
    {
      avatar:
        "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-1/422724159_3711517109169888_5660314751144490822_n.jpg?stp=dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeF2CPhBHysBPK6uHGM7JGho75lt6mZr6GjvmW3qZmvoaORlk9rCLtxxZX4oG-eaMRiFUnlt_Z6gwSIQ8QvxIEWJ&_nc_ohc=JlyNhriLj_QQ7kNvgFK5Kuk&_nc_ht=scontent.fdad3-1.fna&_nc_gid=AyuMyMs0uYXEsNDm-qwLNJF&oh=00_AYDKYVRHmfWSU3mqF9MOAmE9P79qDp8GB1LhOWOFpTbvjg&oe=66EA29AC",
      name: "Đăng Lên",
      location: "Quảng Nam",
    },
  ];

  const posts = [
    {
      name: "Nhơn Trần",
      location: "Quang Nam, Viet Nam",
      departureDate: "09/12/2024",
      participants: 1,
      status: "Đang tìm"
    },
    {
      name: "Hải Đăng",
      location: "Quang Tri, Viet Nam",
      departureDate: "12/11/2024",
      participants: 2,
      status: "Đang tìm"
    },
    {
      name: "Đăng Lên",
      location: "Quang Nam, Viet Nam",
      departureDate: "10/10/2024",
      participants: 3,
      status: "Đã đủ"
    },
    {
      name: "Đức Lương",
      location: "Quang Trị, Viet Nam",
      departureDate: "10/10/2024",
      participants: 3,
      status: "Đã đủ"
    },
    {
      name: "Nhơn Trần",
      location: "Quang Nam, Viet Nam",
      departureDate: "09/12/2024",
      participants: 1,
      status: "Đang tìm"
    },
    {
      name: "Hải Đăng",
      location: "Quang Tri, Viet Nam",
      departureDate: "12/11/2024",
      participants: 2,
      status: "Đang tìm"
    },
    {
      name: "Đăng Lên",
      location: "Quang Nam, Viet Nam",
      departureDate: "10/10/2024",
      participants: 3,
      status: "Đã đủ"
    },
    {
      name: "Đức Lương",
      location: "Quang Trị, Viet Nam",
      departureDate: "10/10/2024",
      participants: 3,
      status: "Đã đủ"
    },
  ];

  const events = [
    {
      image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg",
      title: "Vultures Listening Party",
      date: "Thứ tư, 21/08/2023 vào lúc 7:00",
      location: "20 Nguyên Minh Châu, Ngũ Hành Sơn, Đà Nẵng"
    },
    {
      image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg",
      title: "Zed Album Release",
      date: "Thứ sáu, 15/09/2023 vào lúc 8:00",
      location: "30 Lý Thái Tổ, Hoàn Kiếm, Hà Nội"
    },
    {
      image: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_0.jpg",
      title: "Ekko DJ Night",
      date: "Chủ nhật, 10/10/2023 vào lúc 9:00",
      location: "60 Bạch Đằng, Hải Châu, Đà Nẵng"
    }
  ];


  return (
    <>
      <Container fluid className="banner-container">
        <Carousel indicators={false} controls={false}>
          <Carousel.Item>
            <img src="https://cdn.oneesports.vn/cdn-data/sites/4/2024/01/Zed_38.jpg" alt="" className="banner-container object-fit-cover" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://cdn.oneesports.vn/cdn-data/sites/4/2024/01/Zed_38.jpg" alt="" className="banner-container object-fit-cover" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://cdn.oneesports.vn/cdn-data/sites/4/2024/01/Zed_38.jpg" alt="" className="banner-container object-fit-cover" />
          </Carousel.Item>
        </Carousel>
      </Container>

      <Container fluid >
        <p className="fw-semibold fst-italic text-center favorite-destination-title">Những điểm đến hấp dẫn</p>
        <h1 className="header-section text-black fw-bold text-center">
          Người địa phương
        </h1>
        <Row className="p-0 m-0">
          <Swiper
            slidesPerView={5.1}
            spaceBetween={10}
            freeMode={true}
            modules={[FreeMode]}
            className="mySwiper"
            breakpoints={{
              // Mobile (số lượng slide ít hơn)
              320: {
                slidesPerView: 1.9, // Hiển thị 1.9 slides trên màn hình mobile
                spaceBetween: 0, // Khoảng cách giữa các slide
              },
              // Tablet
              768: {
                slidesPerView: 3.8, // Hiển thị 3.8 slides trên màn hình tablet
                spaceBetween: 15, // Khoảng cách giữa các slide
              },
              // Desktop
              1024: {
                slidesPerView: 4.1, // Hiển thị 4.1 slides trên màn hình desktop
                spaceBetween: 20, // Khoảng cách giữa các slide
              },
              // Large Desktop
              1440: {
                slidesPerView: 5.2, // Hiển thị 5.1 slides trên màn hình lớn hơn
                spaceBetween: 30, // Khoảng cách giữa các slide
              },
            }}
          >
            {hosts.map((host, index) => (
              <SwiperSlide key={index}>
                <HostCard />
              </SwiperSlide>
            ))}
          </Swiper>

        </Row>

        <Row className="m-0 p-0">
          <Col lg={7}>
            <p className="fw-semibold fst-italic favorite-destination-title">Những điểm đến hấp dẫn</p>
            {/* Map over the posts array to render multiple PostCard components */}
            <div className="overflow-y-auto px-1" style={{ height: '570px' }}>
              {posts.map((post, index) => (
                <PostCard
                  key={index}
                  name={post.name}
                  location={post.location}
                  departureDate={post.departureDate}
                  participants={post.participants}
                  status={post.status}
                />
              ))}
            </div>
          </Col>
          <Col lg={5}>
            <p className="fw-semibold favorite-destination-title">Đề xuất sự kiện</p>
            <Swiper
              direction={'vertical'}
              slidesPerView={1}
              spaceBetween={30}
              mousewheel={true}
              pagination={{
                clickable: true,
              }}
              modules={[Mousewheel, Pagination]}
              className="mySwiper-event"
            >
                {events.map((event, index) => (
                <SwiperSlide key={index}>
                  <EventSlide
                    image={event.image}
                    title={event.title}
                    date={event.date}
                    location={event.location}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
        <FixedActionMenu />
      </Container>
    </>
  );
}

export default Dashboard;
