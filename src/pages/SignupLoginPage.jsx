// src/pages/SignupLoginPage.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authActions'; // Import login action
import { useNavigate } from 'react-router-dom';

const SignupLoginPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false); // Toggle between login and signup
  const [errorMessage, setErrorMessage] = useState('');
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function to handle form submission for both login and signup
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic for signup
    if (isSignup) {
      if (!name || !email || !password || !confirmPassword) {
        setErrorMessage('Please fill out all fields.');
        return;
      }
      if (password !== confirmPassword) {
        setErrorMessage('Passwords do not match.');
        return;
      }
    }

    // Clear any previous error messages
    setErrorMessage('');

    // Mock authentication logic
    const user = { email, password, name }; // Create a user object
    const isAdmin = email === 'admin@admin.com'; // Example condition for identifying admin

    // Dispatch login action
    dispatch(login(user, isAdmin));

    // Redirect to home page after login/signup
    navigate('/');
  };

  // Function to toggle between login and signup
  const toggleForm = () => {
    setIsSignup(!isSignup);
    setErrorMessage(''); // Clear any error messages when toggling
  };

  return (
    <div>
      <h1>{isSignup ? 'Signup' : 'Login'}</h1>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        {isSignup && (
          <>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </>
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {isSignup && (
          <>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </>
        )}
        <button type="submit">{isSignup ? 'Signup' : 'Login'}</button>
      </form>
      <button onClick={toggleForm}>
        {isSignup ? 'Already have an account? Login' : 'Need an account? Signup'}
      </button>
    </div>
  );
};

export default SignupLoginPage;

// const stylest = {
//     navbar: {
//       backgroundColor: '#333',
//       color: '#fff',
//       padding: '10px 20px',
//     },
   
//   };