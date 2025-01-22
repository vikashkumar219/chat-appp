import React from 'react';

const Chats = ({ onChatClick }) => {
  const chatsData = [
    { id: 1, name: 'Vikash', message: 'Hello', lastOnline: '10:00 AM' },
    { id: 2, name: 'ShinChan', message: 'Yo', lastOnline: '10:15 AM' },
    { id: 3, name: 'Ram', message: 'hii', lastOnline: '10:30 AM' },
    { id: 4, name: 'Shyam', message: 'Byee', lastOnline: '10:45 AM' },
  ];

  return (
    <div className="chats">
      {chatsData.map(chat => (
        <div key={chat.id} className="userChat" onClick={() => onChatClick(chat)}>
          <img src="/images/user person.png" alt={chat.name} />
          <div className="userChatInfo">
            <span>{chat.name}</span>
            <p>{chat.message}</p>
          </div>
          <p className="lastOnline">{chat.lastOnline}</p>
        </div>
      ))}
    </div>
  );
};

export default Chats;
