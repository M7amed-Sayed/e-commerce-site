// src/redux/actions/authActions.js

// Action Types
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

// Action Creator: Login
export const login = (user, isAdmin) => {
  return {
    type: LOGIN_SUCCESS,
    payload: { user, isAdmin },
  };
};

// Action Creator: Logout
export const logout = () => {
  return {
    type: LOGOUT,
  };
};