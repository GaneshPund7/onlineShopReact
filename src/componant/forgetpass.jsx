import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

const ForgetPassword = () => {
  const [loginData, setLoginData] = useState({ email: ""});

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/sign-up/forgot-password", loginData);
      alert("Otp Send successfully");
      window.location.href = "/verifyOtp";
      console.log(response.data);
    } catch (error) {
      console.error("Error logging in", error);
      alert("Login failed");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Find your details</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control" placeholder="Enter your email" onChange={handleChange} value={loginData.email} required />
          </div>
          
          <button type="submit" className="btn btn-primary w-100 mb-4">send details</button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
