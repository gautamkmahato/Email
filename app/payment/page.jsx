'use client'

// pages/payment.js
import { useState } from 'react';

export default function Payment() {
  const [loading, setLoading] = useState(false);

  const initiatePayment = async () => {
    setLoading(true);

    const userId = 123; // User ID (replace this with the actual user ID)
    const amount = 500; // Payment amount in INR

    // Make the API call to create the Razorpay order
    const res = await fetch('/api/razorpay', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount, userId })
    });

    const data = await res.json();
    
    if (res.ok) {
      const { orderId } = data;

      // Load the Razorpay checkout script
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_API_KEY, // Replace with Razorpay public key
        amount: amount * 100, // Convert to paise
        currency: 'INR',
        name: 'Your Company Name',
        description: 'Test Payment',
        image: '/logo.png',
        order_id: orderId,
        handler: function (response) {
          // Handle successful payment
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
          // Optionally send a request to your server to update the payment status
        },
        prefill: {
          name: 'John Doe',
          email: 'john@example.com',
          contact: '9876543210',
        },
        notes: {
          address: 'Razorpay Corporate Office',
        },
        theme: {
          color: '#F37254',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      alert('Error creating order');
    }
  };

  return (
    <div>
      <h1>Payment Page</h1>
      <button onClick={initiatePayment} disabled={loading}>
        {loading ? 'Processing Payment...' : 'Pay Now'}
      </button>
    </div>
  );
}
