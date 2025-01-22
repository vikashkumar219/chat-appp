import React from 'react';
import Navbar from '../Components/Navbar';
import Search from '../Components/Search';
import Chats from '../Components/Chats';

// eslint-disable-next-line react/prop-types
const SlideBar = ({ onChatClick }) => {
  return (
    <div className='slidebar'>
      <Navbar />
      <Search />
      <Chats onChatClick={onChatClick} />
    </div>
  );
}

export default SlideBar;
