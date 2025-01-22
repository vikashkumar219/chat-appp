import * as React from 'react';
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
  const navigate = useNavigate();

  
  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/register');
  };

  return (
    <div className="landing-container">
      <div className="landing-content">
        <div className="text-content animate-text">
          <h1>Welcome to the Virtual Chat!</h1>
          <p className="description-line">
            Communicate effectively and stay connected with our powerful virtual chat application.
            Experience real-time messaging and seamless interactions.
          </p>
          <div className="button-group">
            <button className="login-btn animate-btn" onClick={handleLoginClick}>
              Login
            </button>
            <button className="signup-btn animate-btn" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
        <div className="image-container animate-image">
          <img src="/images/chathi.jpg" alt="Chatbot" className="chatbot-img" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
