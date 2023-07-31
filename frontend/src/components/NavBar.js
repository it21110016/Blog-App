import React, { useState } from 'react';
import img from './img.png';
import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.css';

const NavBar = () => {

  const [mobile, setMobile] = useState(false);

  const handleLogout = () => {
    // Clear the user's login status (e.g., remove the JWT token from localStorage)
    localStorage.removeItem('token');

    // Redirect the user to the login page
    window.location.href = "/login";
  };

  return (
    <header>
      <nav className={styles.navbar}>

        <Link to='/'>
          <img className={styles.logo} src={img} alt='Logo'></img>
        </Link>

        <ul className={mobile ? styles.navmobile : styles.navLinks} onClick={() => setMobile(false)}>

          <Link to='/' className={styles.home}>
            <li>Home</li>
          </Link>
          <Link to='#' className={styles.about}>
            <li>About</li>
          </Link>
          <Link to='#' className={styles.services}>
            <li>Services</li>
          </Link>
          <Link to='#' className={styles.contact}>
            <li>Contact</li>
          </Link>

        </ul>

        {/* Check if the user is logged in and show the appropriate link */}
        {localStorage.getItem('token') ? (
          <>
            <p className={styles.logout} onClick={handleLogout}>Logout</p>
          </>
        ) : (
          <>
            <Link to='/signup' className={styles.signup}>
              <p>Sign Up</p>
            </Link>
            <Link to='/login' className={styles.login}>
              <p>Login</p>
            </Link>
          </>
        )}

        <button className={styles.mobileMenuIcon} onClick={() => setMobile(!mobile)}>
          {mobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
        </button>

      </nav>
    </header>
  );
};

export default NavBar;