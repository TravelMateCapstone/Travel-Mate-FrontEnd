import React from 'react';

function ChatHeader({ chatName }) {
  return (
    <div className="chat-header rounded-top-3">
      <div className="chat-header-info">
        <p>{chatName}</p>
        <span>Online</span>
      </div>
    </div>
  );
}

export default ChatHeader;
