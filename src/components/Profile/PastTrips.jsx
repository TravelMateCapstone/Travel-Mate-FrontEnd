import React from 'react';
import { Card, Image, Container, Nav } from 'react-bootstrap';

function PastTrips() {
  return (
    <Container className='p-3' style={{ background: '#F3F6FF' }}>
      <h1 className="mb-4"><i className="bi bi-clipboard-check"></i> PAST TRIPS</h1>

      <div className='mx-2'>
        <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="#">All</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">From Traveller</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">From Host</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <Card className="p-3 mb-3">
        <div className="d-flex align-items-center">
          <Image
            src="https://cdn.oneesports.vn/cdn-data/sites/4/2024/01/Zed_38.jpg"
            roundedCircle
            className='me-3'
            style={{ width: '80px', height: '80px' }} // Adjust image size
          />
          <div>
            <Card.Title className='mb-0 fw-bold'>Stunning nature beauty Da Nang City</Card.Title>
            <Card.Text>Hosted by Tran Hai Dang</Card.Text>
          </div>
        </div>

        <div className="d-flex mt-3">
          <Card.Link className='text-muted border rounded px-3 py-1 me-2 fs-6'>
            Da Nang, Viet Nam
          </Card.Link>
          <Card.Link className='text-muted border rounded px-3 py-1 me-2 fs-6'>
            1 Guest
          </Card.Link>
        </div>

        <Card.Text className='mt-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti viverra dictum nunc natoque torquent ligula duis.
          Sit gravida imperdiet sem nec eget morbi sodales. Eros lacus lectus vulputate viverra lacinia dictumst dictumst.
          Iaculis dolor ad tortor praesent facilisi blandit ridiculus.
        </Card.Text>

        {/* Styled image container */}
        <div className="d-flex align-items-center justify-content-start m-2">
          <Image
            src="https://cdn.oneesports.vn/cdn-data/sites/4/2024/01/Zed_38.jpg"
            className='me-3'
            style={{ width: '30%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
          />
          <Image
            src="https://cdn.oneesports.vn/cdn-data/sites/4/2024/01/Zed_38.jpg"
            className='me-3'
            style={{ width: '30%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
          />
          <Image
            src="https://cdn.oneesports.vn/cdn-data/sites/4/2024/01/Zed_38.jpg"
            className='me-3'
            style={{ width: '30%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
          />
        </div>

        <Card.Title className='mb-0 fw-bold m-2'>Guest Review</Card.Title>
        <div className="d-flex align-items-center m-2">
          <Image
            src="https://cdn.oneesports.vn/cdn-data/sites/4/2024/01/Zed_38.jpg"
            roundedCircle
            className='me-3'
            style={{ width: '80px', height: '80px' }} // Adjust image size
          />
          <div>
            <div className='d-flex'>
              <Card.Title className='mb-0 fw-bold me-3'>Hai Dang</Card.Title>
              <div className='d-flex'>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-half"></i>
                <i class="bi bi-star"></i>
              </div>
            </div>
            <Card.Text className='text-muted'>Dien Ban, Quang Nam</Card.Text>
          </div>
        </div>
        <Card.Text >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti viverra dictum nunc natoque torquent ligula duis.
          Sit gravida imperdiet sem nec eget morbi sodales. Eros lacus lectus vulputate viverra lacinia dictumst dictumst.</Card.Text>

      </Card>


      <Card className="p-3 mb-3">
        <div className="d-flex align-items-center">
          <Image
            src="https://cdn.oneesports.vn/cdn-data/sites/4/2024/01/Zed_38.jpg"
            roundedCircle
            className='me-3'
            style={{ width: '80px', height: '80px' }} // Adjust image size
          />
          <div>
            <Card.Title className='mb-0 fw-bold'>Stunning nature beauty Da Nang City</Card.Title>
            <Card.Text>Hosted by Tran Hai Dang</Card.Text>
          </div>
        </div>

        <div className="d-flex mt-3">
          <Card.Link className='text-muted border rounded px-3 py-1 me-2'>
            Da Nang, Viet Nam
          </Card.Link>
          <Card.Link className='text-muted border rounded px-3 py-1 me-2'>
            1 Guest
          </Card.Link>
        </div>

        <Card.Text className='mt-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti viverra dictum nunc natoque torquent ligula duis.
          Sit gravida imperdiet sem nec eget morbi sodales. Eros lacus lectus vulputate viverra lacinia dictumst dictumst.
          Iaculis dolor ad tortor praesent facilisi blandit ridiculus.
        </Card.Text>

        {/* Styled image container */}
        <div className="d-flex align-items-center justify-content-start m-2">
          <Image
            src="https://cdn.oneesports.vn/cdn-data/sites/4/2024/01/Zed_38.jpg"
            className='me-3'
            style={{ width: '50%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
          />
          <Image
            src="https://cdn.oneesports.vn/cdn-data/sites/4/2024/01/Zed_38.jpg"
            className='me-3'
            style={{ width: '50%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
          />
        </div>

        <Card.Title className='mb-0 fw-bold m-2'>Guest Review</Card.Title>
        <div className="d-flex align-items-center m-2">
          <Image
            src="https://cdn.oneesports.vn/cdn-data/sites/4/2024/01/Zed_38.jpg"
            roundedCircle
            className='me-3'
            style={{ width: '80px', height: '80px' }} // Adjust image size
          />
          <div>
            <div className='d-flex'>
              <Card.Title className='mb-0 fw-bold me-3'>Hai Dang</Card.Title>
              <div className='d-flex'>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-half"></i>
                <i class="bi bi-star"></i>
              </div>
            </div>
            <Card.Text className='text-muted'>Dien Ban, Quang Nam</Card.Text>
          </div>
        </div>
        <Card.Text >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti viverra dictum nunc natoque torquent ligula duis.
          Sit gravida imperdiet sem nec eget morbi sodales. Eros lacus lectus vulputate viverra lacinia dictumst dictumst.</Card.Text>

      </Card>
    </Container>
  );
}

export default PastTrips;
