import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Make sure this path matches the location of your CSS file

const Login = () => {
  return (
    <div className="login-container">
      <h2 className="login-title">JNBStore</h2>
      <div className="login-card">
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default Login;
