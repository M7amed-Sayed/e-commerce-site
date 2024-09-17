// src/pages/CheckoutPage.js
import React from 'react';
import { useSelector } from 'react-redux';

const CheckoutPage = () => {
  const cart = useSelector((state) => state.items.cart); // Access cart state from Redux

  // Calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h1>Checkout</h1>
      <h2>Order Summary</h2>
      {cart.map((item) => (
        <div key={item.id} className="checkout-item">
          <p>{item.name} - ${item.price} x {item.quantity}</p>
        </div>
      ))}
      <h3>Total Price: ${calculateTotalPrice()}</h3>
      <p>Expected delivery date: {new Date().toLocaleDateString()}</p>
    </div>
  );
};

export default CheckoutPage;