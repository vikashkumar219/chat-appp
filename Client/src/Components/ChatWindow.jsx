import React, { useState } from 'react';

const ChatWindow = ({ chat }) => {
  const [message,setMessage] = useState("");
  const [messages,setMessages] = useState<Array>([]);
  console.log("message",message);
  console.log("messages",messages);
  
  return (
    <div className="chatWindow">
      
      <div className="chatHeader">
        <h2>{chat.name}</h2>
        <p>Last Online: {chat.lastOnline}</p>
      </div>
      <div className="messagesContainer">
        <p>{chat.message}</p>
      </div>
      <div className="chatInput">
        <input type="text" onChange={(e)=>setMessage(e.target.value)} placeholder="Type a message..." />
        <button onClick={(e)=>{
          e.preventDefault();
          setMessages((prev)=>{
            prev = [...prev+message]
          });

         

         
          
        }}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
