// src/pages/CartPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCartQuantity } from '../redux/actions/itemActions'; // Import update action
import { useNavigate } from 'react-router-dom'; // Import useNavigate to navigate

const CartPage = () => {
  const cart = useSelector((state) => state.items.cart); // Access cart state from Redux
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Function to handle item quantity change
  const handleQuantityChange = (id, delta) => {
    const item = cart.find((cartItem) => cartItem.id === id);
    const newQuantity = item.quantity + delta;

    // Update quantity only if it's greater than 0
    if (newQuantity >= 0) {
      dispatch(updateCartQuantity(id, newQuantity));
    }
  };

  // Function to handle checkout button click
  const handleCheckout = () => {
    navigate('/checkout'); // Navigate to the Checkout page
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h2>{item.name}</h2>
              <p>Price: ${item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
              </div>
              <p>Total: ${item.price * item.quantity}</p>
            </div>
          ))}
          <h2>Total Price: ${calculateTotalPrice()}</h2>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
