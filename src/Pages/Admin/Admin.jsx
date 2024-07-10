import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Admin.module.css';
const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'; // Fallback para desenvolvimento local

const Admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdminData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await fetch(`${apiUrl}/api/admin`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status !== 200) {
          navigate('/login');
        } else {
          const data = await response.json();
          console.log(data);
        }
      } catch (error) {
        console.error('Erro ao buscar dados de admin:', error);
        navigate('/login');
      }
    };

    fetchAdminData();
  }, [navigate]);

  return (
    <div>
      <h2 className={styles.h2admin}>Página de Admin</h2>
    </div>
  );
};

export default Admin;
