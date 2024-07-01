import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul className={styles.socialIcon}>
                <li className={styles.socialIconItem}>
                    <a className={styles.socialIconLink} href="#">
                        <FaFacebookF />
                    </a>
                </li>
                <li className={styles.socialIconItem}>
                    <a className={styles.socialIconLink} href="#">
                        <FaTwitter />
                    </a>
                </li>
                <li className={styles.socialIconItem}>
                    <a className={styles.socialIconLink} href="#">
                        <FaLinkedinIn />
                    </a>
                </li>
                <li className={styles.socialIconItem}>
                    <a className={styles.socialIconLink} href="#">
                        <FaInstagram />
                    </a>
                </li>
            </ul>

            <p>&copy; 2024 DevForge | All Rights Reserved</p>
        </footer>
    );
}

export default Footer;
