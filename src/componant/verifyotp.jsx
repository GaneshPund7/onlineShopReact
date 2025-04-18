import React, { useState } from "react";
import axios from "axios";

const VerifyOtp = () => {
  const [otpData, setOtpData] = useState({ email: "", otp: "" });

  const handleChange = (e) => {
    setOtpData({ ...otpData, [e.target.name]: e.target.value });
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/sign-up/verify-otp", otpData);
      alert("OTP Verified Successfully!");
      console.log(response.data);
      // Redirect to reset password or home page
      window.location.href = "/update-password"; 
    } catch (error) {
      console.error("OTP verification failed", error);
      alert("Invalid OTP or Email");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Verify OTP</h2>
        <form onSubmit={handleVerify}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              onChange={handleChange}
              value={otpData.email}
               
            />
          </div>

          <div className="mb-3">
            <label className="form-label">OTP</label>
            <input
              type="text"
              name="otp"
              className="form-control"
              placeholder="Enter OTP"
              onChange={handleChange}
              value={otpData.otp}
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100 mb-4">Verify</button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtp;
