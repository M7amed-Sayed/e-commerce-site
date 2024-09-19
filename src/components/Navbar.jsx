// // src/components/Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav style={styles.navbar}>
//       <div style={styles.navContainer}>
//         <h1 style={styles.logo}>E-Commerce</h1>
//         <ul style={styles.navLinks}>
//           <li>
//             <Link to="/" style={styles.link}>Home</Link>
//           </li>
//           <li>
//             <Link to="/about" style={styles.link}>About</Link>
//           </li>
//           <li>
//             <Link to="/items" style={styles.link}>Items</Link>
//           </li>
//           <li>
//             <Link to="/cart" style={styles.link}>Cart</Link>
//           </li>
//           <li>
//             <Link to="/login" style={styles.link}>Login / Signup</Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };



// export default Navbar;


// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/authActions';

const Navbar = () => {
  const dispatch = useDispatch();
  const { user, isAdmin } = useSelector((state) => state.auth); // Access auth state from Redux
  
  // Access cart items from Redux
  const cartItems = useSelector((state) => state.items.cart || []); 

  // Calculate total number of items in the cart
  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navContainer}>
        <h1 style={styles.logo}>E-Commerce</h1>
        <ul style={styles.navLinks}>
          <li><Link to="/" style={styles.link}>Home</Link></li>
          <li><Link to="/about" style={styles.link}>About</Link></li>
          <li><Link to="/items" style={styles.link}>Items</Link></li>
          <li>
            <Link to="/cart" style={styles.link}>
              Cart
              {totalCartItems > 0 && (
                <span style={styles.cartBadge}>
                  {totalCartItems}
                </span>
              )}
            </Link>
          </li>

          {user ? (
            <>
              {isAdmin && <li><Link to="/admin" style={styles.link}>Admin Panel</Link></li>}
              <li><button onClick={handleLogout} style={styles.link}>Logout</button></li>
            </>
          ) : (
            <li><Link to="/login" style={styles.link}>Login / Signup</Link></li>
          )}
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
  },
  navContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    margin: 0,
  },
  navLinks: {
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
  cartBadge: {
    backgroundColor: 'gray',
    borderRadius: '20%',
    padding: '2px 5px',
    marginLeft: '5px',
    fontSize: '12px',
    color: '#fff',
  },
};

export default Navbar;
