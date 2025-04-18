import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './componant/register';
import Login from './componant/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './componant/home';
import ForgetPassword from './componant/forgetpass';
import VerifyOtp from './componant/verifyotp';
import UpdatePassword from './componant/updatepass';
import RazorpayCheckout from './componant/order';

function App() {
  return (
    <Router>
      <div className="container mt-2">
        <Routes>
          <Route path="/" element={<RazorpayCheckout to="/order" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} /> 
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/verifyOtp" element={<VerifyOtp />} />
          <Route path="/update-password" element={<UpdatePassword />} />
          <Route path="/order" element={<RazorpayCheckout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
