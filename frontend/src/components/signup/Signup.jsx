import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.scss';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleRedirect = () => {
    window.open('https://tradepoints-dashboard.netlify.app', '_blank');
  };  
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords don't match!");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/signup', {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      alert("Account created successfully!");
      window.location.href = 'https://tradepoints-dashboard.netlify.app/';
      // Optionally redirect the user after signup
    } catch (error) {
      if (error.response && error.response.data) {
        // Handle server-side errors
        setErrorMessage(error.response.data.message || 'Something went wrong!');
      } else {
        // Handle network errors
        setErrorMessage('Network error. Please try again later.');
      }
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2 className="signup-title">Sign Up</h2>

        {errorMessage && <p className="signup-error">{errorMessage}</p>}
        {successMessage && <p className="signup-success">{successMessage}</p>}

        <div className="signup-inputGroup">
          <label htmlFor="username" className="signup-label">Full Name</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="signup-input"
            required
          />
        </div>

        <div className="signup-inputGroup">
          <label htmlFor="email" className="signup-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="signup-input"
            required
          />
        </div>

        <div className="signup-inputGroup">
          <label htmlFor="password" className="signup-label">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="signup-input"
            required
          />
        </div>

        <div className="signup-inputGroup">
          <label htmlFor="confirmPassword" className="signup-label">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="signup-input"
            required
          />
        </div>

        <button type="submit" className="signup-button">Sign Up</button>
        <div className="signup-footer">
          <p>
            Already have an account? <a href="/signin">Sign in</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
