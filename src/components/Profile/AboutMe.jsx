import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import "../../assets/css/Profile/AboutMe.css"

function AboutMe() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <h1 className="mb-4 text-success"><i class="bi bi-info-circle"></i> GIỚI THIỆU</h1>
              <div id="content">
                <ul class="timeline">
                  <li class="event">
                    <h2> MÔ TẢ</h2>
                    <p>Hi, I'm a passionate developer with a love for building web and mobile applications.</p>
                  </li>
                  <li class="event">
                    <h3>TẠI SAO TÔI SỬ DỤNG TRAVEL MATE</h3>
                    <p>I’m here to expand my knowledge, collaborate on exciting projects, and share my skills.</p>
                  </li>
                  <li class="event">
                    <h3>SỞ THÍCH</h3>
                    <p className="small btn btn-success mx-3">Coding</p>
                    <p className="small btn btn-success mx-3">Coding</p>
                    <p className="small btn btn-success mx-3">Coding</p>
                  </li>
                  <li class="event">
                    <h3>ÂM NHẠC, PHIM ẢNH & SÁCH</h3>
                    <p>I love a mix of genres—from indie pop and jazz to rock. Always up for discovering new tunes, especially local music scenes. Big fan of films that make you think or feel deeply. I enjoy everything from Nolan’s thrillers to Studio Ghibli’s magic, and I’m always on the hunt for indie gems.
                      Books are my escape. Whether it’s fiction or non-fiction, I’m into anything that tells a good story. Always happy to swap book recommendations over a coffee!</p>
                  </li>
                  <li class="event">
                    <h3>TÔI CÓ THỂ CHIA SẺ GÌ VỚI BẠN</h3>
                    <p>I’m happy to share good conversation, travel stories, and a genuine appreciation for new experiences. If you’re into video editing or want to learn some basics, I’d love to share my skills. I’m also a decent cook and can whip up a tasty meal from my home country or something new we can try together. Most importantly, I bring a positive attitude and a willingness to help out around the house in any way I can!</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <Container className='p-3 border rounded-3'>
    //   <h1 className="mb-4 text-success"><i class="bi bi-info-circle"></i> GIỚI THIỆU</h1>

    //   <Card className="mb-3" style={{ backgroundColor: '#E8F0FE' }}>
    //     <Card.Header as="h5"><i className="bi bi-circle"></i> MÔ TẢ</Card.Header>
    //     <Card.Body>
    //       <Card.Text className="small ms-5">
    //         Hi, I'm a passionate developer with a love for building web and mobile applications.
    //       </Card.Text>
    //     </Card.Body>
    //   </Card>

    //   <Card className="mb-3" style={{ backgroundColor: '#E8F0FE' }}>
    //     <Card.Header as="h5"><i className="bi bi-circle"></i> TẠI SAO TÔI SỬ DỤNG TRAVEL MATE</Card.Header>
    //     <Card.Body>
    //       <Card.Text className="small ms-5">
    //         I’m here to expand my knowledge, collaborate on exciting projects, and share my skills.
    //       </Card.Text>
    //     </Card.Body>
    //   </Card>

    //   <Card className="mb-3" style={{ backgroundColor: '#E8F0FE' }}>
    //     <Card.Header as="h5"><i className="bi bi-circle"></i> SỞ THÍCH</Card.Header>
    //     <Card.Body>
    //       <div className="d-flex gap-3">
    //         <p className="small btn btn-success">
    //           Coding
    //         </p>
    //         <p className="small btn btn-success">
    //           Guitar
    //         </p>
    //         <p className="small btn btn-success">
    //           Singing
    //         </p>
    //       </div>
    //     </Card.Body>
    //   </Card>


    //   <Card className="mb-3" style={{ backgroundColor: '#E8F0FE' }}>
    //     <Card.Header as="h5"><i className="bi bi-circle"></i> ÂM NHẠC, PHIM ẢNH & SÁCH</Card.Header>
    //     <Card.Body>
    //       <Card.Text className="small ms-5">
    //         I enjoy listening to classical music, as well as modern indie and electronic genres.
    //       </Card.Text>
    //     </Card.Body>
    //   </Card>

    //   <Card className="mb-3" style={{ backgroundColor: '#E8F0FE' }}>
    //     <Card.Header as="h5"><i className="bi bi-circle"></i> TÔI CÓ THỂ CHIA SẺ GÌ VỚI BẠN</Card.Header>
    //     <Card.Body>
    //       <Card.Text className="small ms-5">
    //         I’m a big fan of sci-fi movies and love reading books that challenge my thinking.
    //       </Card.Text>
    //     </Card.Body>
    //   </Card>

    //   <Card className="mb-3" style={{ backgroundColor: '#E8F0FE' }}>
    //     <Card.Header as="h5"><i className="bi bi-circle"></i> TÔI CÓ THỂ CHIA SẺ GÌ VỚI BẠN</Card.Header>
    //     <Card.Body>
    //       <Card.Text className="small ms-5">
    //         I can share my knowledge about web development, mobile app development, and experience with APIs.
    //       </Card.Text>
    //     </Card.Body>
    //   </Card>
    // </Container>
  );
}

export default AboutMe;
