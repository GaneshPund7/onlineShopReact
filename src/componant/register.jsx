import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/sign-up/user", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      alert("Registration successful!");
      window.location.href = "/login";
      console.log(response.data);
    } catch (error) {
      console.error("Error registering user", error);
      alert("Registration failed");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" name="name" className="form-control" placeholder="Enter your name" onChange={handleChange} value={formData.name} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control" placeholder="Enter your email" onChange={handleChange} value={formData.email} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" name="password" className="form-control" placeholder="Enter your password" onChange={handleChange} value={formData.password} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input type="password" name="confirmPassword" className="form-control" placeholder="Confirm your password" onChange={handleChange} value={formData.confirmPassword} required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
