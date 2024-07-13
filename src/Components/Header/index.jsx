// src/Components/Header/index.jsx
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import styles from './Header.module.css';
import { FaBars } from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleAdminNavigation = () => {
    navigate('/admin');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className={`${styles.header} ${styles.sticky}`}>
      <a className={`${styles.logo} ${styles.devLogo}`} href='#'>
        <span>Dev</span>Forge
      </a>
      <FaBars className={styles.menuIcon} onClick={toggleMenu} />
      <ul className={`${styles.navlist} ${isMenuOpen ? styles.showMenu : ''}`}>
        <li>
          <a href='#' className={styles.active}>
            Inicio
          </a>
        </li>
        <li>
          <a href='#servicos'>Serviços</a>
        </li>
        <li>
          <a href='#roadmap'>Road Map</a>
        </li>
        <li>
          <a href='#portfolio'>Portifólio</a>
        </li>
        <li>
          <a href='#contact'>Orçamento</a>
        </li>
        {user ? (
          <>
            <li>
              <button
                onClick={handleAdminNavigation}
                className={styles.btn_login}
              >
                Admin
              </button>
            </li>
            <li>
              <button onClick={handleLogout} className={styles.btn_login}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <button onClick={handleLogin} className={styles.btn_login}>
              Login
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Header;
