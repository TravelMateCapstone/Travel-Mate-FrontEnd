import React from 'react';

function CommentPostGroupDetail({ comment }) {
  return (
    <div className='' style={{
      padding: '12px 16px',
      display: 'flex',
      gap: '15px',
      border: '1px solid #D9D9D9',
      width: '810px',
      borderRadius: '20px',
      marginBottom: '20px'
    }}>
      <img src={comment.avatar} alt="avatar" style={{
        width: '60px',
        height: '60px',
        objectFit: 'cover',
        borderRadius: '50%'
      }} />

      <div>
        <div className='d-flex align-items-center gap-2'>
          <strong style={{ fontSize: '16px' }}>{comment.name}</strong>
          <p className='m-0' style={{ fontSize: '12px' }}>{comment.location}</p>
        </div>
        <p className='m-0' style={{ fontSize: '16px' }}>{comment.content}</p>
      </div>
    </div>
  );
}

export default CommentPostGroupDetail;
