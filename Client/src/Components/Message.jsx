import React from 'react';

const Message = ({ message }) => {
  return (
    <div className="message">
      <div className="messageInfo">
        <img src="/images/user person.png" alt="person" />
        <span>{message.timestamp}</span>
      </div>

      <div className="messageContent">
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
