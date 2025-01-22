import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faImage } from '@fortawesome/free-solid-svg-icons';

const Input = ({sendMessage}) => {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [message,setMessage] = useState("");
  console.log("message",message);
  

  const handleFileChange = (e) => setFile(e.target.files[0]);
  const handleImageChange = (e) => setImage(e.target.files[0]);
  const handleEnter = (ev=>{
    if(ev.key==="Enter"){
      sendMessage(message)
      setMessage("")
    }
  })
  return (
    <div className="input">
      <input type="text" value={message} onKeyDown={handleEnter} onChange={(e)=>setMessage(e.target.value)} placeholder="Type here..." />
      <div className="send">
        <input type="file" id="file" style={{ display: 'none' }} onChange={handleFileChange} />
        <label htmlFor="file"><FontAwesomeIcon icon={faPaperclip} /></label>

        <input type="file" id="image" accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} />
        <label htmlFor="image"><FontAwesomeIcon icon={faImage} /></label>

        <button onClick={(e)=>{
          e.preventDefault();
          sendMessage(message)  
          setMessage("")
        }}
          >Send</button>
      </div>
    </div>
  );
};

export default Input;
