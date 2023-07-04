import React from 'react';

const Footer = () => {

  const styles = {
    footer: {
      backgroundColor: '#333',
      padding: '10px',
      marginTop: '20px',
      height: '200px'
    },
    footerContent: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    socialIcons: {
      marginRight: '10px',
    },
    iconLink: {
      color: '#fff',
      fontSize: '20px',
      marginRight: '10px',
      textDecoration: 'none',
    },
    footerText: {
      color: '#fff',
      fontSize: '14px',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>

        <div style={styles.socialIcons}>
          <a href="https://twitter.com" style={styles.iconLink}><i className="pi pi-twitter" style={{ color: 'slateblue', fontSize: '1.5rem' }}></i></a>
          <a href="https://youtube.com" style={styles.iconLink}><i className="pi pi-youtube" style={{ color: 'slateblue', fontSize: '1.5rem' }}></i></a>
          <a href="https://facebook.com" style={styles.iconLink}><i className="pi pi-facebook" style={{ color: 'slateblue', fontSize: '1.5rem' }}></i></a>
          <a href="https://linkedin.com" style={styles.iconLink}><i className="pi pi-linkedin" style={{ color: 'slateblue', fontSize: '1.5rem' }}></i></a>
        </div>

        <p style={styles.footerText}>© 2023 Blog Company. All rights reserved.</p>

      </div>
    </footer>
  );
};

export default Footer;