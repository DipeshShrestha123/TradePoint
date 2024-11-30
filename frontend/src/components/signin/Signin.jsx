import React, { useState } from 'react';
import axios from 'axios';
import './SignIn.scss';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await axios.post('https://tradepoint.onrender.com/login', {
        username,
        password,
      });

      alert('Signed in successfully!');
      console.log('Response:', response.data);

      // Optionally handle token or redirect
      localStorage.setItem('token', response.data.token);
      window.location.href = 'https://tradepoints-dashboard.netlify.app/';
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message || 'Invalid credentials!');
      } else {
        setErrorMessage('Network error. Please try again later.');
      }
    }
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleSubmit} className="signin-form">
        <h2 className="signin-title">Sign In</h2>

        {errorMessage && <p className="signin-error">{errorMessage}</p>}
        {successMessage && <p className="signin-success">{successMessage}</p>}

        <div className="signin-inputGroup">
          <label htmlFor="username" className="signin-label">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="signin-input"
            required
          />
        </div>
        <div className="signin-inputGroup">
          <label htmlFor="password" className="signin-label">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signin-input"
            required
          />
        </div>
        <button type="submit" className="signin-button">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
