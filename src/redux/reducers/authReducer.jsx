// src/redux/reducers/authReducer.js

import { LOGIN_SUCCESS, LOGOUT } from '../actions/authActions';

const initialState = {
  user: null,
  isAdmin: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload.user, isAdmin: action.payload.isAdmin };
    case LOGOUT:
      return { ...state, user: null, isAdmin: false };
    default:
      return state;
  }
};

export default authReducer;