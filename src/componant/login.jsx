import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/sign-up/login", { email, password });
      
      // Store user email
      localStorage.setItem("loggedInUser", JSON.stringify({ email }));

      alert("Login successful!");
      console.log(response.data);
      window.location.href = "/home";
    } catch (error) {
      console.error("Error logging in", error);
      alert("Login failed");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              onChange={handleEmailChange}
              value={email}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              onChange={handlePasswordChange}
              value={password}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-4">Login</button>
        </form>

        {/* Google Login */}
        <div className="text-center mb-3">
          <GoogleLogin
            onSuccess={credentialResponse => {
              const decoded = jwtDecode(credentialResponse.credential);
              console.log("Google user:", decoded);

              // Store email or user info
              localStorage.setItem("loggedInUser", JSON.stringify({ email: decoded.email }));

              alert("Login successful via Google!");
              window.location.href = "/home";
            }}
            onError={() => {
              alert("Google Login Failed");
            }}
          />
        </div>

        {/* Links */}
        <div className="d-flex justify-content-between">
          <Link to="/forgetPassword" className="btn btn-info">Forget Password</Link>
          <Link to="/register" className="btn btn-info">Register here</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
