import React, { useState, useEffect } from 'react';
import ChatList from '../components/Chat/ChatList';
import ChatMessage from '../components/Chat/ChatMessage';
import ChatHeader from '../components/Chat/ChatHeader';
import ChatInput from '../components/Chat/ChatInput';
import '../assets/css/Chat/Chat.css';
import RequestDetails from '../components/Chat/RequestDetails';

function Chat() {
  // Load from localStorage, fallback to default values if no value exists
  const [activeChat, setActiveChat] = useState(() => {
    return localStorage.getItem('activeChat') ? parseInt(localStorage.getItem('activeChat')) : 0;
  });

  const [activeRequest, setActiveRequest] = useState(() => {
    return localStorage.getItem('activeRequest') ? parseInt(localStorage.getItem('activeRequest')) : 0;
  });

  const [activeTab, setActiveTab] = useState('chat'); // Track active tab ('chat' or 'request')

  // Load `selectedChat` and `selectedRequest` from localStorage
  const [selectedRequest, setSelectedRequest] = useState(() => {
    const savedRequest = localStorage.getItem('selectedRequest');
    return savedRequest ? JSON.parse(savedRequest) : null;
  });

  const [selectedChat, setSelectedChat] = useState(() => {
    const savedChat = localStorage.getItem('selectedChat');
    return savedChat ? JSON.parse(savedChat) : null;
  });

  const [searchTerm, setSearchTerm] = useState('');

  const userName = 'Tran Duy Nhon'; // Example user name

  // Example chats data
  const chats = [
    {
      id: 0,
      name: 'Alice',
      avatar: 'https://via.placeholder.com/50',
      lastMessage: 'Lịch trình tối nay như thế nào?',
      timestamp: '24/9/2024',
      messages: [
        { sender: 'Alice', text: "Lorem ipsum dolor sit amet.", time: "8:00 PM" },
        { sender: 'Tran Duy Nhon', text: "Lorem ipsum dolor sit amet.", time: "8:05 PM" }
      ]
    },
    {
      id: 1,
      name: 'Tran Hai Dang',
      avatar: 'https://via.placeholder.com/50',
      lastMessage: 'Lịch trình tối nay như thế nào?',
      timestamp: '24/9/2024',
      messages: [
        { sender: 'Tran Hai Dang', text: "Lorem ipsum dolor sit amet.", time: "8:00 PM" },
        { sender: 'Tran Duy Nhon', text: "Lorem ipsum dolor sit amet.", time: "8:05 PM" }
      ]
    },
  ];

  // Example requests data
  const requests = [
    { 
      id: 0, 
      name: 'Alice', 
      avatar: 'https://via.placeholder.com/50', 
      location: 'Quang Nam, Vietnam',
      job: 'Engineer', 
      bio: 'Loves traveling', 
      hobbies: ['Reading', 'Hiking', 'Swimming'], 
      timestamp: '24/9/2024' 
    },
    { 
      id: 1, 
      name: 'Tran Duy Nhon', 
      avatar: 'https://via.placeholder.com/50', 
      location: 'Quang Nam, Vietnam',
      job: 'Engineer', 
      bio: 'Loves traveling', 
      hobbies: ['Reading', 'Hiking', 'Swimming'], 
      timestamp: '24/9/2024' 
    },
  ];

  // Handle chat selection
  const handleChatClick = (chatId) => {
    const selectedChat = chats.find(chat => chat.id === chatId);
    setActiveChat(chatId); // Set active chat index
    setSelectedChat(selectedChat); // Store the selected chat details
  };

  // Handle request selection
  const handleRequestClick = (requestId) => {
    const selectedRequest = requests.find((r) => r.id === requestId);
    setSelectedRequest(selectedRequest); // Set the selected request for detailed view
    setActiveRequest(requestId); // Set active request index
  };

  // Handle tab switching
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filtered lists based on the search term
  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredRequests = requests.filter((request) =>
    request.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Save `activeChat`, `activeRequest`, `selectedChat`, and `selectedRequest` to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('activeChat', activeChat);
    localStorage.setItem('selectedChat', JSON.stringify(selectedChat));
  }, [activeChat, selectedChat]);

  useEffect(() => {
    localStorage.setItem('activeRequest', activeRequest);
    localStorage.setItem('selectedRequest', JSON.stringify(selectedRequest));
  }, [activeRequest, selectedRequest]);

  // Dynamic chat header name based on the active tab
  const chatHeaderName =
    activeTab === 'chat'
      ? selectedChat?.name // Chat participant's name
      : selectedRequest
      ? selectedRequest.name // Requester's name
      : ''; // Default value when no chat/request is selected

  return (
    <div className="chat-container">
      <div className="chat-sidebar">
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
          value={searchTerm}
          onChange={handleSearch}
        />

        {/* Tab buttons */}
        <div className="tab-buttons">
          <button
            className={activeTab === 'chat' ? 'active' : ''}
            onClick={() => handleTabClick('chat')}
          >
            Chat
          </button>
          <button
            className={activeTab === 'request' ? 'active' : ''}
            onClick={() => handleTabClick('request')}
          >
            Request
          </button>
        </div>

        {/* Chat list or request list based on active tab */}
        {activeTab === 'chat' ? (
          <ChatList
            chats={filteredChats}
            activeChat={activeChat}
            onChatClick={handleChatClick}
          />
        ) : (
          <ChatList
            chats={filteredRequests}
            activeChat={activeRequest} // Pass the active request instead of activeChat
            onChatClick={handleRequestClick} // Handle request clicks
          />
        )}
      </div>

      <div className="chat-main">
        {/* Chat header */}
        <ChatHeader chatName={chatHeaderName} />

        {/* Chat messages or request details based on the active tab */}
        {activeTab === 'chat' ? (
          <>
            <div className="chat-messages">
              {selectedChat?.messages.map((message, index) => (
                <ChatMessage
                  key={index}
                  sender={message.sender}
                  text={message.text}
                  time={message.time}
                  isSentByUser={message.sender === userName}
                />
              ))}
            </div>
            <ChatInput />
          </>
        ) : selectedRequest ? (
          <RequestDetails request={selectedRequest} />
        ) : (
          <div className="no-request-selected">Select a request to view details</div>
        )}
      </div>
    </div>
  );
}

export default Chat;
