import * as React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'vikashsain969@gmail.com' && password === '667722') {
      onLogin();  // Trigger authentication
      navigate('/home');  // Navigate to Home after successful login
    } else {
      alert('Check the Login details again!');
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Virtual Chat</span>
        <span className="title">Login</span>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign In</button>
        </form>
        <p className="user">
          Don't have an account? <Link to="/register">Register</Link>  {/* Use Link for navigation */}
        </p>
      </div>
    </div>
  );
};

export default Login;
