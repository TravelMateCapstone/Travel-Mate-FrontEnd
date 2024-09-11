import React from 'react'
import { Card, Container } from 'react-bootstrap';

function MyHome() {
  return (
    <Container className='p-3 vh-100' style={{ background: '#F3F6FF' }}>
      <h1 className=" mb-4"><i class="bi bi-house-door"></i> Dang's Home</h1>

      <Card className="mb-3">
        <Card.Header as="h5">DANG’S PREFERENCES</Card.Header>
        <Card.Body>
          <Card.Text className="small ms-3">
            <i class="bi bi-person-check-fill"></i> Max number of Guests: Any
          </Card.Text>
          <Card.Text className="small ms-3">
            Smoking Allowed?  Yes
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Header as="h5">SLEEPING ARRANGEMENTS</Card.Header>
        <Card.Body>
          <Card.Text className="small ms-3">
            Shared room
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Header as="h5">MORE DETAILS</Card.Header>
        <Card.Body>
          <Card.Header as="h6">Roommate Situation</Card.Header>
          <Card.Text className="small ms-3">
            I live alone
          </Card.Text>
          <Card.Header as="h6">What I Can Share with Guests</Card.Header>
          <Card.Text className="small ms-3">
            A place to sleep, free kitchen, free bathroom, wifi, my time and accompany
          </Card.Text>
          <Card.Header as="h6">Public Transportation Access</Card.Header>
          <Card.Text className="small ms-3">
            I have a bike
          </Card.Text>
          <Card.Header as="h6">Additional Info</Card.Header>
          <Card.Text className="small ms-3">
            Feel free to ask me anything. Welcome!
          </Card.Text>
        </Card.Body>
      </Card>

    </Container>
  )
}

export default MyHome;
