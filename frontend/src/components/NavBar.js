import React from 'react';

const NavBar = () => {

    const styles = {
        navbar: {
            backgroundColor: '#7561d1',
            padding: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        logoContainer: {
            marginRight: '10px',
        },
        logo: {
            width: '50px',
            height: '50px',
        },
        navbarList: {
            listStyleType: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
        },
        navbarItem: {
            marginLeft: '10px',
        },
        navbarLink: {
            color: '#fff',
            textDecoration: 'none',
            padding: '5px 10px',
            borderRadius: '3px',
        },
    };

    return (
        <nav style={styles.navbar}>
            <div style={styles.logoContainer}>
                <a href="/"><img src="./img.png" alt="Logo" style={styles.logo} /></a>
            </div>
            <ul style={styles.navbarList}>
                <li style={styles.navbarItem}><a href="/" style={styles.navbarLink}><i className="pi pi-home" style={{ color: 'black', fontSize: '1.2rem' }}> Home</i></a></li>
                <li style={styles.navbarItem}><a href="#about" style={styles.navbarLink}><i className="pi pi-user" style={{ color: 'black', fontSize: '1.2rem' }}> About</i></a></li>
                <li style={styles.navbarItem}><a href="#services" style={styles.navbarLink}><i className="pi pi-briefcase" style={{ color: 'black', fontSize: '1.2rem' }}> Services</i></a></li>
                <li style={styles.navbarItem}><a href="#contact" style={styles.navbarLink}><i className="pi pi-phone" style={{ color: 'black', fontSize: '1.2rem' }}> Contact</i></a></li>
            </ul>
        </nav>
    );
};

export default NavBar;