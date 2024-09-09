import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const EditProfile = () => {
  const [profileData, setProfileData] = useState({
    hostingAvailability: '',
    whereIGrewUp: '',
    occupation: '',
    education: '',
    languagesFluent: '',
    languagesLearning: '',
    aboutMe: '',
    whyOnTravelMate: '',
    interests: '',
    favoriteMusicMoviesBooks: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle save profile logic (e.g., API call to save profile)
    console.log('Profile Data:', profileData);
  };

  const handleCancel = () => {
    // Reset form or navigate back to profile view
    console.log('Canceled editing');
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formHostingAvailability">
              <Form.Label>Hosting Availability</Form.Label>
              <Form.Control
                type="text"
                name="hostingAvailability"
                value={profileData.hostingAvailability}
                onChange={handleChange}
                placeholder="Hosting Availability"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formWhereIGrewUp">
              <Form.Label>Where I Grew Up</Form.Label>
              <Form.Control
                type="text"
                name="whereIGrewUp"
                value={profileData.whereIGrewUp}
                onChange={handleChange}
                placeholder="Where I Grew Up"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="formOccupation">
              <Form.Label>Occupation</Form.Label>
              <Form.Control
                type="text"
                name="occupation"
                value={profileData.occupation}
                onChange={handleChange}
                placeholder="Occupation"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formEducation">
              <Form.Label>Education</Form.Label>
              <Form.Control
                type="text"
                name="education"
                value={profileData.education}
                onChange={handleChange}
                placeholder="Education"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group controlId="formLanguagesFluent">
              <Form.Label>Languages I'm Fluent In</Form.Label>
              <Form.Control
                type="text"
                name="languagesFluent"
                value={profileData.languagesFluent}
                onChange={handleChange}
                placeholder="Languages I'm Fluent In"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formLanguagesLearning">
              <Form.Label>Languages I'm Learning</Form.Label>
              <Form.Control
                type="text"
                name="languagesLearning"
                value={profileData.languagesLearning}
                onChange={handleChange}
                placeholder="Languages I'm Learning"
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="formAboutMe" className="mt-3">
          <Form.Label>About Me</Form.Label>
          <Form.Control
            as="textarea"
            name="aboutMe"
            rows={3}
            value={profileData.aboutMe}
            onChange={handleChange}
            placeholder="Tell us about yourself"
          />
        </Form.Group>

        <Form.Group controlId="formWhyOnTravelMate" className="mt-3">
          <Form.Label>Why I'm on Travel Mate</Form.Label>
          <Form.Control
            as="textarea"
            name="whyOnTravelMate"
            rows={3}
            value={profileData.whyOnTravelMate}
            onChange={handleChange}
            placeholder="Why are you on Travel Mate?"
          />
        </Form.Group>

        <Form.Group controlId="formInterests" className="mt-3">
          <Form.Label>My Interests</Form.Label>
          <Form.Control
            type="text"
            name="interests"
            value={profileData.interests}
            onChange={handleChange}
            placeholder="E.g., drawing, sport"
          />
        </Form.Group>

        <Form.Group controlId="formFavoriteMusicMoviesBooks" className="mt-3">
          <Form.Label>Favorite Music, Movies, and Books</Form.Label>
          <Form.Control
            as="textarea"
            name="favoriteMusicMoviesBooks"
            rows={3}
            value={profileData.favoriteMusicMoviesBooks}
            onChange={handleChange}
            placeholder="Share your favorite music, movies, and books"
          />
        </Form.Group>

        <div className="d-flex justify-content-end mt-4">
          <Button variant="secondary" className="me-2" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default EditProfile;
