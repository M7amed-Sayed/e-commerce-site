// src/redux/reducers/itemReducer.js

import { SET_ITEMS, ADD_TO_CART, REMOVE_FROM_CART } from '../actions/itemActions';

const initialState = {
  items: [],
  cart: [],
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return { ...state, items: action.payload };
      
    case ADD_TO_CART:
      const { item, quantity } = action.payload;
      const existingCartItemIndex = state.cart.findIndex(cartItem => cartItem.id === item.id);

      // If item already exists in the cart, update the quantity
      if (existingCartItemIndex >= 0) {
        const updatedCart = state.cart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
        return { ...state, cart: updatedCart };
      } else {
        // If item does not exist in the cart, add it with the specified quantity
        return { ...state, cart: [...state.cart, { ...item, quantity }] };
      }

    case REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter(cartItem => cartItem.id !== action.payload) };

    default:
      return state;
  }
};

export default itemReducer;