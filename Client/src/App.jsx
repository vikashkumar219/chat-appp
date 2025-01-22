import * as React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import LandingPage from './Pages/Landing';  // Import LandingPage component

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false); // Controls login state
  const [selectedChat, setSelectedChat] = React.useState(null); // Manages selected chat

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/home"
          element={isAuthenticated ? (
            <Home selectedChat={selectedChat} onChatClick={handleChatClick} />
          ) : (
            <Navigate to="/" replace />
          )}
        />
  
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onRegister={handleLogin} />} />
        
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
