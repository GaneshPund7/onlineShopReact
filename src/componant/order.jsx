import React from "react";

const RazorpayCheckout = () => {
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = resolve;
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // 🔁 Step 1: Fetch order from backend
    const response = await fetch("http://localhost:3000/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ amount: 5 }) // sending ₹5 to backend
    });

    const order = await response.json(); // should return { id, amount, currency }

    // 🔁 Step 2: Open Razorpay checkout
    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key ID
      amount: order.amount,
      currency: order.currency,
      name: "Mini Store",
      description: "Payment for Test Product",
      order_id: order.id,
      handler: function (response) {
        console.log("Payment successful:", response);
        // Optionally: verify payment by sending to backend
      },
      prefill: {
        name: "John Doe",
        email: "john@example.com",
        contact: "9876543210"
      },
      theme: {
        color: "#0f172a"
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="p-4 max-w-sm mx-auto bg-white rounded-lg shadow-md text-center">
      <img
        src="../../assets/laptop.jpg"
        alt="Product"
        className="rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">HP Laptop</h2>
      <p className="text-gray-700 mb-4">Price: ₹5</p>
      <button
        onClick={handlePayment}
        className="btn btn-primary btn-sm"
      >
        Buy Now
      </button>
    </div>
  );
};

export default RazorpayCheckout;
