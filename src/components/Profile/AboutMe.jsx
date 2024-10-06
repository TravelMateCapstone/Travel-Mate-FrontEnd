import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../../assets/css/Profile/AboutMe.css";

function AboutMe() {
  return (
    <Container className='p-3 border rounded-3'>
      <Row>
        <Col md={12}>
          <h2 className="mb-4 text-success fw-bold"><i class="bi bi-info-circle"></i> GIỚI THIỆU</h2>
          <ul className="cbp_tmtimeline">
            <li>
              <div className="cbp_tmicon bg-info"><i className="zmdi zmdi-label"></i></div>
              <div className="cbp_tmlabel">
                <h4> MÔ TẢ</h4>
                <p>Hi, I'm a passionate developer with a love for building web and mobile applications.</p>
              </div>
            </li>
            <li>
              <div className="cbp_tmicon bg-info"><i className="zmdi zmdi-label"></i></div>
              <div className="cbp_tmlabel">
                <h4>TẠI SAO TÔI SỬ DỤNG TRAVEL MATE</h4>
                <p>I’m here to expand my knowledge, collaborate on exciting projects, and share my skills.</p>
              </div>
            </li>
            <li>
              <div className="cbp_tmicon bg-info"><i className="zmdi zmdi-case"></i></div>
              <div className="cbp_tmlabel">
                <h4>SỞ THÍCH</h4>
                <p className="small border border-dark btn mx-3 rounded-pill">Coding</p>
                <p className="small border border-dark btn mx-3 rounded-pill">Coding</p>
                <p className="small border border-dark btn mx-3 rounded-pill">Coding</p>
              </div>
            </li>
            <li>
              <div className="cbp_tmicon bg-info"><i className="zmdi zmdi-case"></i></div>
              <div className="cbp_tmlabel">
                <h4>ÂM NHẠC, PHIM ẢNH & SÁCH</h4>
                <p>I love a mix of genres—from indie pop and jazz to rock. Always up for discovering new tunes, especially local music scenes. Big fan of films that make you think or feel deeply. I enjoy everything from Nolan’s thrillers to Studio Ghibli’s magic, and I’m always on the hunt for indie gems.
                  Books are my escape. Whether it’s fiction or non-fiction, I’m into anything that tells a good story. Always happy to swap book recommendations over a coffee!</p>
              </div>
            </li>
            <li>
              <div className="cbp_tmicon bg-info"><i className="zmdi zmdi-case"></i></div>
              <div className="cbp_tmlabel">
                <h3>TÔI CÓ THỂ CHIA SẺ GÌ VỚI BẠN</h3>
                <p>I’m happy to share good conversation, travel stories, and a genuine appreciation for new experiences. If you’re into video editing or want to learn some basics, I’d love to share my skills. I’m also a decent cook and can whip up a tasty meal from my home country or something new we can try together. Most importantly, I bring a positive attitude and a willingness to help out around the house in any way I can!</p>
              </div>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
