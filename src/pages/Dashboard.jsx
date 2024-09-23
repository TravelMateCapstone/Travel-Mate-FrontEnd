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
import FixedActionMenu from "../components/Shared/FixedActionMenu";
import EventSlide from "../components/Dashboard/EventSlide";
import ThreeDCarousel from "../components/Dashboard/ThreeDCarousel";
import CarouselComponent from "../components/Dashboard/CarouselComponent";

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
        "https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg",
      name: "Dung Nguyễn",
      location: "Quảng Nam",
    },
    {
      avatar:
        "https://scontent.fdad3-6.fna.fbcdn.net/v/t1.6435-9/196345374_802283120647638_7621935877792246612_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHccyNO23Wfqx6YT4-Cuh2WQhFbNZzcAKVCEVs1nNwApT8aYcuSfh1zhBySQAsABrbDiKRm6eMLfUQF6abN_X-3&_nc_ohc=4VIJw9bzM1EQ7kNvgGDm8V8&_nc_ht=scontent.fdad3-6.fna&_nc_gid=AgoUGNaKbluJYPsZE48nC4K&oh=00_AYAP13LEr7H-i2r0q9e-ykY7qpK3EaPg3etqKinhlHIgJw&oe=6711E9A4",
      name: "Nhơn Trần",
      location: "Quảng Nam",
    },
    {
      avatar:
        "https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/449953942_1897758114021691_3261686242135934155_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=bdeb5f&_nc_eui2=AeGDl3KmxuVYMQgR1x4aAqVHV6BF_GUu0MhXoEX8ZS7QyDLJKNG8MiAl0vaJTLnZsmFwYScjopr6GpS52Ym4OEGx&_nc_ohc=i5vpDVPBoKUQ7kNvgGgT8xf&_nc_ht=scontent.fdad3-6.fna&_nc_gid=Aiph37rDgcTtDuK3KTY81ib&oh=00_AYBysnFMLPsu3IwbEYX-AAGWFjR_t_LE-B6Nb3aZhP3BDA&oe=66F062A2",
      name: "Hải Đăng",
      location: "Quảng Trị",
    },
    {
      avatar:
        "https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/422724159_3711517109169888_5660314751144490822_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF2CPhBHysBPK6uHGM7JGho75lt6mZr6GjvmW3qZmvoaORlk9rCLtxxZX4oG-eaMRiFUnlt_Z6gwSIQ8QvxIEWJ&_nc_ohc=jJpw5jYJQ7wQ7kNvgHAb2Cg&_nc_ht=scontent.fdad3-6.fna&_nc_gid=AmXy9KbTv6JU07j3j9w2jvZ&oh=00_AYDS9smkbf_hBfxEXTkFf_w9b9gVbGj5NfaXLOt6oiUw8w&oe=66F04B2A",
      name: "Đăng Lên",
      location: "Quảng Nam",
    },
    {
      avatar:
        "https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/450130714_2492572681133064_8520867086168985175_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=669761&_nc_eui2=AeEWqDUKdNi--RFucrIjh0hyMGrdPQh4fp8wat09CHh-nye23c59AsdI3MvZwId8BstxInOxMVLJ_M41EBwzUr_i&_nc_ohc=Rc1E-WZbWfIQ7kNvgFgSuI6&_nc_ht=scontent.fdad3-6.fna&_nc_gid=ACl1SZjrSxEyfwf0EjCGtrr&oh=00_AYCOj7r9-5FZ_ZkxzjizLKLjH_X-3QZs9mk1a3oZgEV1gw&oe=66F0403D",
      name: "Đức Lương",
      location: "Quảng Trị",
    },
    {
      avatar:
        "https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg",
      name: "Dung Nguyễn",
      location: "Quảng Nam",
    },
    {
      avatar:
        "https://scontent.fdad3-6.fna.fbcdn.net/v/t1.6435-9/196345374_802283120647638_7621935877792246612_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHccyNO23Wfqx6YT4-Cuh2WQhFbNZzcAKVCEVs1nNwApT8aYcuSfh1zhBySQAsABrbDiKRm6eMLfUQF6abN_X-3&_nc_ohc=4VIJw9bzM1EQ7kNvgGDm8V8&_nc_ht=scontent.fdad3-6.fna&_nc_gid=AgoUGNaKbluJYPsZE48nC4K&oh=00_AYAP13LEr7H-i2r0q9e-ykY7qpK3EaPg3etqKinhlHIgJw&oe=6711E9A4",
      name: "Nhơn Trần",
      location: "Quảng Nam",
    },
    {
      avatar:
        "https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/449953942_1897758114021691_3261686242135934155_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=bdeb5f&_nc_eui2=AeGDl3KmxuVYMQgR1x4aAqVHV6BF_GUu0MhXoEX8ZS7QyDLJKNG8MiAl0vaJTLnZsmFwYScjopr6GpS52Ym4OEGx&_nc_ohc=i5vpDVPBoKUQ7kNvgGgT8xf&_nc_ht=scontent.fdad3-6.fna&_nc_gid=Aiph37rDgcTtDuK3KTY81ib&oh=00_AYBysnFMLPsu3IwbEYX-AAGWFjR_t_LE-B6Nb3aZhP3BDA&oe=66F062A2",
      name: "Hải Đăng",
      location: "Quảng Trị",
    },
    {
      avatar:
        "https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/422724159_3711517109169888_5660314751144490822_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeF2CPhBHysBPK6uHGM7JGho75lt6mZr6GjvmW3qZmvoaORlk9rCLtxxZX4oG-eaMRiFUnlt_Z6gwSIQ8QvxIEWJ&_nc_ohc=jJpw5jYJQ7wQ7kNvgHAb2Cg&_nc_ht=scontent.fdad3-6.fna&_nc_gid=AmXy9KbTv6JU07j3j9w2jvZ&oh=00_AYDS9smkbf_hBfxEXTkFf_w9b9gVbGj5NfaXLOt6oiUw8w&oe=66F04B2A",
      name: "Đăng Lên",
      location: "Quảng Nam",
    },
    {
      avatar:
        "https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/450130714_2492572681133064_8520867086168985175_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=669761&_nc_eui2=AeEWqDUKdNi--RFucrIjh0hyMGrdPQh4fp8wat09CHh-nye23c59AsdI3MvZwId8BstxInOxMVLJ_M41EBwzUr_i&_nc_ohc=Rc1E-WZbWfIQ7kNvgFgSuI6&_nc_ht=scontent.fdad3-6.fna&_nc_gid=ACl1SZjrSxEyfwf0EjCGtrr&oh=00_AYCOj7r9-5FZ_ZkxzjizLKLjH_X-3QZs9mk1a3oZgEV1gw&oe=66F0403D",
      name: "Đức Lương",
      location: "Quảng Trị",
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
      image: "https://tourism.danang.vn/wp-content/uploads/2023/02/cau-rong-da-nang.jpeg",
      title: "Vultures Listening Party",
      date: "Thứ tư, 21/08/2023 vào lúc 7:00",
      location: "20 Nguyên Minh Châu, Ngũ Hành Sơn, Đà Nẵng"
    },
    {
      image: "https://hnm.1cdn.vn/2019/01/16/hanoimoi.com.vn-uploads-lequyen-2019-1-16-_1-3-.jpg",
      title: "Zed Album Release",
      date: "Thứ sáu, 15/09/2023 vào lúc 8:00",
      location: "30 Lý Thái Tổ, Hoàn Kiếm, Hà Nội"
    },
    {
      image: "https://sunhome.com.vn/wp-content/uploads/2022/08/Sk-le-hoi-am-nhac-dien-te-Da-Nang-Carnival.jpg",
      title: "Ekko DJ Night",
      date: "Chủ nhật, 10/10/2023 vào lúc 9:00",
      location: "60 Bạch Đằng, Hải Châu, Đà Nẵng"
    }
  ];

  const images = [
    'https://cdn.tcdulichtphcm.vn/upload/2-2021/images/2021-06-03/1622716610-thumbnail-width1200height628-watermark.jpg',
    'https://baobariavungtau.com.vn/dataimages/202312/original/images1909456_Ch_o_thuy_n_kayak_l__ho_t___ng__a_th_ch_c_a_du_kh_ch_khi___n_V_nh_H__Long..jpg',
    'https://cdn.oneesports.vn/cdn-data/sites/4/2024/01/Zed_38.jpg'
  ]

  return (
    <>
      <CarouselComponent images={images} />
      <Container fluid >
        <p className="fw-semibold fst-italic text-center favorite-destination-title">Những điểm đến hấp dẫn</p>
        <ThreeDCarousel />
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
                <HostCard name={host.name} imageSrc={host.avatar} location={host.location} onContactClick={
                  () => {
                    // handle route over there
                    console.log("Contact button clicked");
                  }
                } />
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
