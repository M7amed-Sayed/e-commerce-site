// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Navbar from './components/Navbar'; // Import Navbar
import Footer from './components/Footer'; // Import Footer
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ItemsPage from './pages/ItemsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import SignupLoginPage from './pages/SignupLoginPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div style={styles.pageContainer}>
          <Navbar />
          <main style={styles.contentWrap}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/items" element={<ItemsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} /> {/* Ensure this route is present */}
            <Route path="/login" element={<SignupLoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};
const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Ensure the container covers at least the height of the viewport
  },
  contentWrap: {
    flex: 1, // This makes the content area grow to fill the available space
  },
};

export default App;



