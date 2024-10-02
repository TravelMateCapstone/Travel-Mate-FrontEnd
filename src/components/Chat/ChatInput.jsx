import React, { useState } from 'react';
import mention from '../../assets/images/mention.png';
import Picker from 'emoji-picker-react';

function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  // Handle sending the message
  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message); // Send the message to the parent component
      setMessage(''); // Clear the input after sending
    }
  };

  // Handle pressing the Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  // Handle emoji click
  const onEmojiClick = (emojiData, event) => {
    setMessage(prevMessage => prevMessage + emojiData.emoji); // Thêm emoji vào tin nhắn
    setShowEmojiPicker(false); // Đóng Emoji Picker sau khi chọn
  };

  return (
    <div className="chat-input-container">
      <i 
        className="bi bi-emoji-smile input-icon-left" 
        onClick={() => setShowEmojiPicker(!showEmojiPicker)} // Hiển thị hoặc ẩn Emoji Picker
      ></i>

      {/* Emoji Picker ở vị trí nổi, không nằm trong ChatInput */}
      {showEmojiPicker && (
        <div className="emoji-picker-container">
          <Picker onEmojiClick={onEmojiClick} />
        </div>
      )}

      <input
        type="text"
        placeholder="Start typing..."
        value={message}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="chat-input-field"
      />

      <img src={mention} alt="" className='input-icon-right'/>
      <button onClick={handleSend} className="send-btn">
        <i className="bi bi-send"></i>
      </button>
    </div>
  );
}

export default ChatInput;
