import * as React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = ({ onRegister }) => {
  const [formData, setFormData] = React.useState({
    virtualName: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onRegister();  // Trigger registration
    navigate('/home');  // Navigate to Home after successful registration
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Virtual Chat</span>
        <span className="title">Register</span>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="virtualName"
            placeholder="Enter Your Virtual Name"
            value={formData.virtualName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">Sign Up</button>
        </form>
        <p className="user">
          Already a User? <Link to="/login">Login</Link>  {/* Use Link for navigation */}
        </p>
      </div>
    </div>
  );
};

export default Register;
