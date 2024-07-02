import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className={styles.formulario}>
      <h2>Login</h2>
      <form>
        <div className={styles.adm}>
          <label htmlFor='email'>E-mail</label>
          <input
            id='email'
            type='email'
            placeholder='exemplo@gmail.com '
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
            onClick={goToHome}
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
