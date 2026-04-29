import React, { useState } from "react";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(); // Redirect to dashboard
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h1 className="login-title">Welcome back 👋</h1>
        <p className="login-subtitle">Sign in to access your dashboard</p>

        <form onSubmit={handleLogin} className="login-form">
          <label>Email</label>
          <input
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="login-btn">Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
