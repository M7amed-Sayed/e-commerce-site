// src/redux/store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk'; // Correct import for redux-thunk
import authReducer from './reducers/authReducer';
import itemReducer from './reducers/itemReducer';

// Combine all reducers into a root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  items: itemReducer,
});

// Create the Redux store with middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;