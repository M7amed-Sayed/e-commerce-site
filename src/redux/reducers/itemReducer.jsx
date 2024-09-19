// src/redux/reducers/itemReducer.js

import { SET_ITEMS, ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../actions/itemActions';

const initialState = {
  items: [],
  cart: [],
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    
    case ADD_TO_CART:
      const existingItem = state.cart.find(cartItem => cartItem.id === action.payload.item.id);
      if (existingItem) {
        // If item is already in the cart, update the quantity
        return {
          ...state,
          cart: state.cart.map(cartItem =>
            cartItem.id === action.payload.item.id
              ? { ...cartItem, quantity: cartItem.quantity + action.payload.quantity }
              : cartItem
          ),
        };
      } else {
        // Add new item to the cart
        return {
          ...state,
          cart: [...state.cart, { ...action.payload.item, quantity: action.payload.quantity }],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    
    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart
          .map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          )
          .filter(item => item.quantity > 0), // Automatically remove items with 0 quantity
      };

    default:
      return state;
  }
};

export default itemReducer;
