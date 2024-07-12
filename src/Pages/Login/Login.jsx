import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        navigate('/admin');
      } else {
        alert('Email ou senha inválidos');
      }
    } catch (error) {
      alert('Erro ao fazer login');
    }
  };

  return (
    <div className={styles.formulario}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
            onClick={() => navigate('/registrar')}
            className={styles.buttonHome}
          >
            Se Registre
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
