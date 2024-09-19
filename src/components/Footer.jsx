// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>&copy; {new Date().getFullYear()} E-Commerce Website. All rights reserved.</p>
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
    padding: '20px 40px',
    width: '100%',
    boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.2)',
    marginTop: 'auto', // Makes footer stick to the bottom if there's little content
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  text: {
    margin: 0,
    fontSize: '14px',
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
    fontSize: '14px',
    transition: 'color 0.3s ease',
  },
};

export default Footer;
