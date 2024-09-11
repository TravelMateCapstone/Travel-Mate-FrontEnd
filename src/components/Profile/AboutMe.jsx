import React from 'react';
import { Card, Container } from 'react-bootstrap';

function AboutMe() {
  return (
    <Container className='p-3' style={{ background: '#F3F6FF' }}>
      <h1 className="mb-4">About Me</h1>

      <Card className="mb-3" style={{ backgroundColor: '#E8F0FE' }}>
        <Card.Header as="h5"><i className="bi bi-circle"></i> INTRODUCE</Card.Header>
        <Card.Body>
          <Card.Text className="small ms-5">
            Hi, I'm a passionate developer with a love for building web and mobile applications.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-3" style={{ backgroundColor: '#E8F0FE' }}>
        <Card.Header as="h5"><i className="bi bi-circle"></i> WHY I'M HERE</Card.Header>
        <Card.Body>
          <Card.Text className="small ms-5">
            I’m here to expand my knowledge, collaborate on exciting projects, and share my skills.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-3" style={{ backgroundColor: '#E8F0FE' }}>
        <Card.Header as="h5"><i className="bi bi-circle"></i> INTERESTS</Card.Header>
        <Card.Body>
          <Card.Text className="small ms-5">
            I love technology, coding, reading about AI, and exploring new tools and frameworks.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-3" style={{ backgroundColor: '#E8F0FE' }}>
        <Card.Header as="h5"><i className="bi bi-circle"></i> MUSIC</Card.Header>
        <Card.Body>
          <Card.Text className="small ms-5">
            I enjoy listening to classical music, as well as modern indie and electronic genres.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-3" style={{ backgroundColor: '#E8F0FE' }}>
        <Card.Header as="h5"><i className="bi bi-circle"></i> MOVIES & BOOKS</Card.Header>
        <Card.Body>
          <Card.Text className="small ms-5">
            I’m a big fan of sci-fi movies and love reading books that challenge my thinking.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-3" style={{ backgroundColor: '#E8F0FE' }}>
        <Card.Header as="h5"><i className="bi bi-circle"></i> WHAT I CAN SHARE</Card.Header>
        <Card.Body>
          <Card.Text className="small ms-5">
            I can share my knowledge about web development, mobile app development, and experience with APIs.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AboutMe;
