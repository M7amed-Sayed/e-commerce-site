// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p>&copy; {new Date().getFullYear()} E-Commerce Website. All rights reserved.</p>
        <ul style={styles.links}>
          <li><a href="#" style={styles.link}>Privacy Policy</a></li>
          <li><a href="#" style={styles.link}>Terms of Service</a></li>
          <li><a href="#" style={styles.link}>Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  links: {
    listStyleType: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
};

export default Footer;