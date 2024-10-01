import React from 'react';

function ChatList({ chats, activeChat, onChatClick }) {
  return (
    <div className="chat-list rounded-top-3">
      <ul>
        {chats.map((chat) => (
          <li
            key={chat.id}
            className={activeChat === chat.id ? 'active' : ''}
            onClick={() => onChatClick(chat.id)}
          >
            <img src={chat.avatar} alt={`${chat.name} avatar`} className="chat-avatar" />
            <div className="chat-details">
              <span className="chat-name">{chat.name}</span>
              <span className="chat-last-message">{chat.lastMessage}</span>
            </div>
            <div className="chat-meta">
              <span className="chat-timestamp">{chat.timestamp}</span>
              <span className="chat-actions">🔔</span> {/* Optional action icons */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatList;
