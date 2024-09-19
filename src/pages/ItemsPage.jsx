// src/pages/ItemsPage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, addToCart } from '../redux/actions/itemActions'; // Import actions
import ItemCard from '../components/ItemCard';

const ItemsPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);

  useEffect(() => {
    dispatch(fetchItems()); // Fetch items when the component is mounted
  }, [dispatch]);

  // Function to handle adding item to the cart with a specified quantity
  const handleAddToCart = (item, quantity) => {
    dispatch(addToCart(item, quantity)); // Dispatch the action with item and quantity
  };

  return (
    <div>
      <h1 style={styles.h1}>Items</h1>
      {/* Container for the items with a flexbox layout */}
      
      <div style={styles.itemsContainer}>
        {items.map((item) => (
          <ItemCard key={item.id} item={item} addToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

// CSS-in-JS styles
const styles = {
  itemsContainer: {
    display: 'flex', // Use flexbox to align items in a row
    justifyContent: 'space-between', // Add space between items
    alignItems: 'flex-start', // Align items at the top
    flexWrap: 'wrap', // Allow items to wrap if the container is too small
    gap: '16px', // Add some spacing between items
    margin: '20px 0', // Add margin at the top and bottom
  },

  image: {
    maxWidth: '100%',
    borderRadius: '8px',
  },
 
};

export default ItemsPage;