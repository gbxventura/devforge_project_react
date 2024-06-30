import React, { useState } from 'react';
import styles from './Header.module.css';
import { FaBars } from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${styles.header} ${styles.sticky}`}>
      <a className={`${styles.logo} ${styles.devLogo}`} href="#"><span>Dev</span>Forge</a>
      <FaBars className={styles.menuIcon} onClick={toggleMenu} />
      <ul className={`${styles.navlist} ${isMenuOpen ? styles.showMenu : ''}`}>
        <li><a href="#" className={styles.active}>Inicio</a></li>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#roadmap">Road Map</a></li>
        <li><a href="#portifolio">Portifólio</a></li>
        <li><a href="#contact">Orçamento</a></li>
      </ul>
    </div>
  );
}

export default Header;
