// src/pages/CartPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/itemActions'; // Import remove action
import { useNavigate } from 'react-router-dom'; // Import useNavigate to navigate

const CartPage = () => {
  const cart = useSelector((state) => state.items.cart); // Access cart state from Redux
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Calculate the total price of items in the cart
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Function to handle item removal from the cart
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id)); // Dispatch remove action
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
              <p>Price: ${item.price} x {item.quantity}</p>
              <p>Total: ${item.price * item.quantity}</p>
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
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