import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Admin.module.css';
const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'; // Fallback para desenvolvimento local

const Admin = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className={styles.h2admin}>Página de Admin</h2>
    </div>
  );
};

export default Admin;
