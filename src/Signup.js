import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'; // Import your CSS file for styling

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [signupError, setSignupError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordError(true);
      return; // Stop form submission if passwords don't match
    } else {
      setPasswordError(false);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setEmailError(true);
      return; // Stop form submission if email is invalid
    } else {
      setEmailError(false);
    }

    // Your signup logic goes here
    console.log('Form submitted:', formData);
    // Clear form data after successful signup
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    // Optionally, redirect the user to another page after successful signup
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">JNBStore</h2> {/* Add the signup title */}
      <div className="signup-card">
        <h2 className='signup-logo'>Sign Up</h2>
        {signupError && <p className="error">{signupError}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {emailError && <p className="error">Invalid email</p>}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {passwordError && <p className="error">Passwords do not match</p>}
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
