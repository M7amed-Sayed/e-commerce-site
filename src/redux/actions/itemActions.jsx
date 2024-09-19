// src/redux/actions/itemActions.js

export const SET_ITEMS = 'SET_ITEMS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';  // New action type

// Action Creator: Fetch Items (Simulating a Fetch from an API)
export const fetchItems = () => {
  return (dispatch) => {
    // Simulated API call (replace with actual API call)
  const items = [
  { id: 1, name: 'Product 1', price: 10, image: '/src/redux/actions/images/meal-1.jpg' },
  { id: 2, name: 'Product 2', price: 15, image: '/images/meal-2.jpg' },
  { id: 3, name: 'Product 3', price: 20, image: '/images/meal-3.jpg' },
  { id: 1, name: 'Product 1', price: 10, image: '/images/meal-1.jpg' },
  { id: 2, name: 'Product 2', price: 15, image: '/images/meal-2.jpg' },
  { id: 3, name: 'Product 3', price: 20, image: '/images/meal-3.jpg' },{ id: 1, name: 'Product 1', price: 10, image: '/images/meal-1.jpg' },
  { id: 2, name: 'Product 2', price: 15, image: '/images/meal-2.jpg' },
  { id: 3, name: 'Product 3', price: 20, image: '/images/meal-3.jpg' },
];
    dispatch({
      type: SET_ITEMS,
      payload: items,
    });
  };
};

// Action Creator: Add Item to Cart with Quantity
export const addToCart = (item, quantity) => {
  return {
    type: ADD_TO_CART,
    payload: { item, quantity },
  };
};

// Action Creator: Remove Item from Cart
export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};
export const updateCartQuantity = (id, quantity) => {
  return {
    type: UPDATE_CART_QUANTITY,
    payload: { id, quantity },
  };
};