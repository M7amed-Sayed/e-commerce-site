// src/components/ItemCard.js
import React, { useState } from 'react';

const ItemCard = ({ item, addToCart }) => {
  const [quantity, setQuantity] = useState(1); // State to track the quantity

  // Function to handle increasing the quantity
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  // Function to handle decreasing the quantity
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Function to handle adding item to the cart
  const handleAddToCart = () => {
    addToCart(item, quantity);
    setQuantity(1); // Reset quantity after adding to cart
  };

  return (
    <div style={styles.card}>
      <img src={item.image} alt={item.name} style={styles.image} />
      <h2>{item.name}</h2>
      <p>Price: ${item.price}</p>
      <div style={styles.counterContainer}>
        <button style={styles.counterButton} onClick={handleDecrease}>-</button>
        <span>{quantity}</span>
        <button style={styles.counterButton} onClick={handleIncrease}>+</button>
      </div>
      <button style={styles.addToCartButton} onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    width: '30%', // Adjusts width to fit three items side by side
    boxSizing: 'border-box',
    textAlign: 'center',
    marginBottom: '20px',
  },
  image: {
    width: '100%', // Makes the image responsive
    height: 'auto', // Maintains aspect ratio
    borderRadius: '8px 8px 0 0', // Rounded corners at the top
    marginBottom: '10px', // Space between image and text
  },
  counterContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  counterButton: {
    padding: '5px 10px',
    margin: '0 5px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  addToCartButton: {
    padding: '8px 16px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default ItemCard;