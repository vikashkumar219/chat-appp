import React from 'react';
import SlideBar from '../Components/SlideBar';
import Chat from '../Components/Chat';

const Home = ({ selectedChat, onChatClick }) => {
  return (
    <div className='home'>
      <div className='container'>
        <SlideBar onChatClick={onChatClick} />
        {selectedChat ? (
          <Chat selectedChat={selectedChat} />
        ) : (
          <div className='noChatSelected'>
            <p>Please select a chat to start messaging.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
