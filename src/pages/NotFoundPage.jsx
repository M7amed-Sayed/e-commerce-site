// src/pages/NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <h2>Sorry, The page you are looking for was not found.</h2>
    <Link to="/">Return to Home Page</Link>
  </div>
);

export default NotFoundPage;