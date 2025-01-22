import React from 'react';
import Message from './Message';

const Messages = ({ messages }) => {
  console.log("got",messages);
  
  return (
    <div className="messages">
      {messages.map((msg, index) => (
        <Message key={index} message={msg} />
      ))}
    </div>
  );
};

export default Messages;
