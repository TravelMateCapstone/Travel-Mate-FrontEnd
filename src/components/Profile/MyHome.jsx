import React from 'react'
import { Card, Container } from 'react-bootstrap';

function MyHome() {
  return (
    <Container className='p-3' style={{ background: '#F3F6FF' }}>
      <h1 className=" mb-4 text-success"><i class="bi bi-house-door"></i> NHÀ CỦA TÔI</h1>

      <Card className="mb-3">
        <Card.Header as="h5">ƯU TIÊN</Card.Header>
        <Card.Body>
          <Card.Text className="small ms-3">
            <i class="bi bi-person-check-fill"></i> Số lượng khách tối đa: 2
          </Card.Text>
          <Card.Text className="small ms-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-trans" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1.707L3.5 2.793l.646-.647a.5.5 0 1 1 .708.708l-.647.646.822.822A4 4 0 0 1 8 3c1.18 0 2.239.51 2.971 1.322L14.293 1H11.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-3.45 3.45A4 4 0 0 1 8.5 10.97V13H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V14H6a.5.5 0 0 1 0-1h1.5v-2.03a4 4 0 0 1-3.05-5.814l-.95-.949-.646.647a.5.5 0 1 1-.708-.708l.647-.646L1 1.707V3.5a.5.5 0 0 1-1 0zm5.49 4.856a3 3 0 1 0 5.02 3.288 3 3 0 0 0-5.02-3.288" />
            </svg> Giới tính tôi muốn đón: Bất kỳ
          </Card.Text>
          <Card.Text className="small ms-3">
            <i class="bi bi-ban"></i> Cho phép hút thuốc? Có
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Header as="h5">NƠI TÁ TÚC</Card.Header>
        <Card.Body>
          <Card.Text className="small ms-3">
            <i class="bi bi-door-open"></i> Phòng đơn
          </Card.Text>
          <Card.Text className="small ms-3">
            Sofa in the living room or private room
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Card.Header as="h5">CHI TIẾT</Card.Header>
        <Card.Body>
          <Card.Header as="h6"> <i class="bi bi-people-fill"></i> Bạn cùng phòng</Card.Header>
          <Card.Text className="small ms-3">
            I live alone
          </Card.Text>
          <Card.Header as="h6"> <i class="bi bi-link-45deg"></i> Tôi có thể chia sẽ gì với bạn ?</Card.Header>
          <Card.Text className="small ms-3">
            A place to sleep, free kitchen, free bathroom, wifi, my time and accompany
          </Card.Text>
          <Card.Header as="h6"> <i class="bi bi-car-front"></i> Phương tiện di chuyển</Card.Header>
          <Card.Text className="small ms-3">
            I have a bike
          </Card.Text>
          <Card.Header as="h6"><i class="bi bi-info-circle"></i> Thông tin bổ sung</Card.Header>
          <Card.Text className="small ms-3">
            Feel free to ask me anything. Welcome!
          </Card.Text>
        </Card.Body>
      </Card>

    </Container>
  )
}

export default MyHome;
