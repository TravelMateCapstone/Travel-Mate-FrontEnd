import React from 'react'
import { Button } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
function JoinedGroupDetail() {

  return (
    <div>
      <img src="https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/86/2018/09/05093645/AP03-Vang-Trang-Va-Canh-Buom.jpg" alt="" style={{
        height: '331px',
        objectFit: 'cover',
        borderRadius: '20px',
        marginBottom: '23px'
      }} />
      <div className='d-flex justify-content-between'>
        <div className='d-flex gap-4'>
          <p className='' style={{
            fontSize: '40px',
            fontWeight: 'bold',
            margin: '0',
            marginBottom: '10px'
          }}>Developer group</p>

          <div style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginTop: '15px'
          }}>Đà nẵng, Viet Nam</div>
        </div>

        <Form.Select aria-label="Default select example" style={{
          height: '44px',
          width: '200px',
          fontSize: '18px',
          padding: '10px 20px',
          borderRadius: '22px',
          color: 'green',
        }}>
          <option>Đã tham gia</option>
          <option value="Rời khỏi nhóm">Rời khỏi nhóm</option>
        </Form.Select>

      </div>

      <p style={{
        padding: '0px',
        fontWeight: '500',
        fontSize: '16px',
        marginBottom: '12px'
      }}>23 thành viên</p>

      <p style={{
        width: '427px'
      }}>Our expert instructors and fun community will help you improve your skills and enjoy the ocean.</p>

      <hr style={{
        border: '1px solid #D9D9D9',
      }} />


      <div style={{
        padding: '0px 32px'
      }}>

        <div className='d-flex gap-4'>
          <img src="https://cdn.oneesports.vn/cdn-data/sites/4/2024/01/Zed_38.jpg" alt="icon" style={{
            width: '72px',
            height: '72px',
            borderRadius: '72px',
            objectFit: 'cover',
          }} />

          <div className='w-100'>
            <textarea type="text" style={{
              borderRadius: '20px',
              border: '1px solid #D9D9D9',
              width: '100%',
              height: '154px',
              padding: '20px',
            }} className='' />

            <div className='d-flex' style={{
              gap: '20px',
              marginTop: '22px'
            }}>
              <ion-icon name="image-outline" style={
                {
                  fontSize: '34px',
                }
              } ></ion-icon>

              <ion-icon name="location-outline" style={
                {
                  fontSize: '34px',
                }
              } ></ion-icon>

              <div className='w-100 d-flex flex-row-reverse'><Button style={{
                backgroundColor: '#409034',
                border: 0,
                borderRadius: '20px',
                padding: '10px 20px',
              }}>Đăng bài</Button></div>
            </div>

          </div>

        </div>
      </div>


      <hr style={{
        border: '1px solid #D9D9D9',
      }} />


      

    </div>
  )
}

export default JoinedGroupDetail