import React, { useState } from 'react';
import CommentPostGroupDetail from './CommentPostGroupDetail';

const comments = [
  {
    id: 1,
    avatar: 'https://yt3.googleusercontent.com/oN0p3-PD3HUzn2KbMm4fVhvRrKtJhodGlwocI184BBSpybcQIphSeh3Z0i7WBgTq7e12yKxb=s900-c-k-c0x00ffffff-no-rj',
    name: 'Nhơn Trần',
    location: 'Quảng Nam',
    content: 'Đăng là người bạn đồng hành tuyệt vời! Vui vẻ, thân thiện và rất am hiểu về Hội An. Nhờ cậu ấy mà chuyến đi của mình thêm phần thú vị. Rất vui được gặp và đi cùng bạn!',
  },
  {
    id: 2,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Huy Nguyễn',
    location: 'Hà Nội',
    content: 'Một trải nghiệm thật tuyệt vời, mình đã có khoảng thời gian đáng nhớ tại Hội An!',
  },
  {
    id: 3,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Thảo Phạm',
    location: 'Đà Nẵng',
    content: 'Chuyến đi rất tuyệt vời, Hội An đẹp và đồ ăn rất ngon!',
  },
  {
    id: 4,
    avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
    name: 'Minh Tuấn',
    location: 'Hồ Chí Minh',
    content: 'Mình rất thích chuyến đi này, cảm giác yên bình và thư giãn.',
  },
  {
    id: 5,
    avatar: 'https://randomuser.me/api/portraits/women/60.jpg',
    name: 'Lan Phạm',
    location: 'Hải Phòng',
    content: 'Những món ăn ở Hội An thật sự rất tuyệt!',
  },
];

function PostGroupDetail() {
  const [visibleComments, setVisibleComments] = useState(2);

  const handleShowMore = () => {
    setVisibleComments(prev => prev + 2);
  };

  return (
    <div className='mb-5'>
      <div className='w-100 p-2 d-flex gap-3 align-items-center'>
        <img src="https://yt3.googleusercontent.com/oN0p3-PD3HUzn2KbMm4fVhvRrKtJhodGlwocI184BBSpybcQIphSeh3Z0i7WBgTq7e12yKxb=s900-c-k-c0x00ffffff-no-rj" alt="" style={{
          width: '72px',
          height: '72px',
          objectFit: 'cover',
          borderRadius: '50%'
        }} />

        <div>
          <strong>Nhơn Trần</strong>
          <p className='m-0'>Chào mừng các bạn đến với nhóm của chúng tôi</p>
        </div>
      </div>
      
      <div style={{
        border: '1px solid #D9D9D9',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '18px',
        borderRadius: '10px',
        boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',
      }}>
        <img src="https://tiki.vn/blog/wp-content/uploads/2023/03/cau-rong-da-nang.jpg" alt="địa điểm" style={{
          width: '395px',
          height: '395px',
          objectFit: 'cover',
          borderRadius: '20px'
        }} />

        <img src="https://tiki.vn/blog/wp-content/uploads/2023/03/cau-rong-da-nang.jpg" alt="địa điểm" style={{
          width: '395px',
          height: '395px',
          objectFit: 'cover',
          borderRadius: '20px'
        }} />

        <img src="https://tiki.vn/blog/wp-content/uploads/2023/03/cau-rong-da-nang.jpg" alt="địa điểm" style={{
          width: '395px',
          height: '395px',
          objectFit: 'cover',
          borderRadius: '20px'
        }} />
      </div>

      <div style={{
        padding: '18px 33px',
        display: 'flex',
        alignItems: 'center',
        gap: '45px'
      }}>
        <ion-icon name="chatbubble-outline" style={{
          fontSize: '36px',
        }}></ion-icon>
        <ion-icon name="share-social-outline" style={{
          fontSize: '36px',
        }}></ion-icon>
      </div>

      {/* Pass visible comments to CommentPostGroupDetail */}
      {comments.slice(0, visibleComments).map((comment) => (
        <CommentPostGroupDetail key={comment.id} comment={comment} />
      ))}

      {/* Show "Show More" button if there are more comments to show */}
      {visibleComments < comments.length && (
        <button onClick={handleShowMore} className='btn btn-outline-dark' style={{
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          borderRadius: '20px',
          fontSize: '12px'
        }}>
          Tải thêm các bình luận <ion-icon name="chevron-down-outline"></ion-icon>
        </button>
      )}
    </div>
  );
}

export default PostGroupDetail;
