// Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async e => {
    e.preventDefault();
    const apiURL = import.meta.env.VITE_API_URL || 'http://localhost:5000'; // Use a variável de ambiente ou default

    try {
      const response = await fetch(`${apiURL}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        navigate('/Admin');
      } else {
        const errorData = await response.json(); // Processa como JSON
        alert(`Login falhou! ${errorData.message}`);
      }
    } catch (error) {
      console.error('Erro de login:', error);
      alert(
        'Erro ao tentar conectar ao servidor. Por favor, tente mais tarde.'
      );
    }
  };

  return (
    <div className={styles.formulario}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className={styles.adm}>
          <label htmlFor='email'>E-mail</label>
          <input
            id='email'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='exemplo@gmail.com'
            autoComplete='email'
            required
            className={styles.inputField}
          />
        </div>
        <div className={styles.adm}>
          <label htmlFor='password'>Senha</label>
          <input
            id='password'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder='Digite sua senha aqui.'
            autoComplete='current-password'
            required
            className={styles.inputField}
          />
        </div>
        <div className={styles.btn}>
          <button type='submit' className={styles.buttonLogin}>
            Entre
          </button>
          <button
            type='button'
            onClick={() => navigate('/Registrar')}
            className={styles.buttonHome}
          >
            Se Registre
          </button>
          <button
            type='button'
            onClick={() => navigate('/')}
            className={styles.buttonHome}
          >
            Voltar para Home
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
