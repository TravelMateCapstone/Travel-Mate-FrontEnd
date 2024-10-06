import React, { useState } from 'react';

function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState('');

  // Xử lý khi thay đổi input
  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  // Xử lý khi gửi tin nhắn
  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message); // Gửi tin nhắn lên parent component
      setMessage(''); // Xóa input sau khi gửi
    }
  };

  // Xử lý khi nhấn Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        placeholder="Start typing..."
        value={message}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress} // Xử lý khi nhấn Enter
      />
      <button onClick={handleSend} className="btn send-btn"><i className='bi bi-send fs-5'></i></button> {/* Nút gửi */}
    </div>
  );
}

export default ChatInput;
