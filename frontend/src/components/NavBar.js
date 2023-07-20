import React, { useState } from 'react';
import img from './img.png'
import { Link } from 'react-router-dom'
import styles from '../styles/navbar.module.css'

const NavBar = () => {

    const [mobile, setMobile] = useState(false);

    return (
        <header>
            <nav className={styles.navbar}>

                <img className={styles.logo} src={img} alt='Logo'></img>

                <ul className={mobile ? styles.navmobile : styles.navLinks}
                    onClick={() => setMobile(false)}>

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
                    <Link to='#' className={styles.signup}>
                        <li>Sign Up</li>
                    </Link>

                </ul>

                <button className={styles.mobileMenuIcon} onClick={() => setMobile(!mobile)}>
                    {mobile ? (<i className='fas fa-times'></i>) : (<i className='fas fa-bars'></i>)}
                </button>

            </nav>
        </header>
    );
};

export default NavBar;