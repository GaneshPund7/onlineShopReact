import React, { useState } from "react";
import axios from "axios";

const UpdatePassword = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/sign-up/update-password", formData);
      alert("Password updated successfully!");
      console.log(response.data);
      window.location.href = "/home"; // Redirect to login page
    } catch (error) {
      console.error("Password update failed", error);
      alert("Failed to update password. Please try again.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Update Password</h2>
        <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">New Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter new password"
              onChange={handleChange}
              value={formData.password}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-4">Update Password</button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
