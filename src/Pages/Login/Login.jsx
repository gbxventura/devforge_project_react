import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import styles from './Login.module.css';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await login(email, password);
      navigate('/admin');
    } catch (error) {
      toast.error('Erro ao fazer login');
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
