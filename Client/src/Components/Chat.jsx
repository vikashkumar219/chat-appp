import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faPhone, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import Messages from './Messages';
import Input from './Input';

const Chat = ({ selectedChat }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const videoRef = useRef(null);
  
  const [messages,setMessages] = useState([]);
  console.log("messages",messages);
  const sendMessage = (message)=>{
    setMessages((prev)=>
      [...prev,message])
  
  }
  const toggleDropdown = () => setShowDropDown(!showDropDown);

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) videoRef.current.srcObject = stream;
      setShowCamera(true);
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const closeCamera = () => {
    setShowCamera(false);
    const stream = videoRef.current?.srcObject;
    stream?.getTracks().forEach(track => track.stop());
  };

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{selectedChat.name}</span>
        <span>Last Seen: {selectedChat.lastOnline}</span>
        <div className="chatIcons">
          <a href="#" onClick={openCamera}><FontAwesomeIcon icon={faCamera} /></a>
          <a href="#"><FontAwesomeIcon icon={faPhone} /></a>
          <a href="#" onClick={toggleDropdown}><FontAwesomeIcon icon={faEllipsisV} /></a>
          {showDropDown && (
            <div className="dropdownMenu">
              <ul>
                <li><a href="#">Profile Info</a></li>
                <li><a href="#">Search</a></li>
                <li><a href="#">Mute Notifications</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {showCamera && (
        <div className="cameraModal">
          <video ref={videoRef} autoPlay playsInline />
          <button onClick={closeCamera}>Close Camera</button>
        </div>
      )}

      {selectedChat.messages?.length ? (
        <Messages messages={selectedChat.messages} />
      ) : (
        <div className="noMessages">
          <p>Start messaging with {selectedChat.name}</p>
        </div>
      )}
      <ul className='messages'>
        {messages.map((message)=>(
          <li>{message}</li>
        )
          
        )}
      </ul>

      <Input sendMessage={sendMessage}/>
    </div>
  );
};

export default Chat;
