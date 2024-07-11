import styles from './Login.module.css';
import registrar from '../../Pages/Registrar/Registrar';

const Login = () => {
  return (
    <div className={styles.formulario}>
      <h2>Login</h2>
      <form onSubmit=''>
        <div className={styles.adm}>
          <label htmlFor='email'>E-mail</label>
          <input
            id='email'
            type='email'
            value=''
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
            value=''
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
          <button type='button' onClick='' className={styles.buttonHome}>
            Se Registre
          </button>
          <button
            type='button'
            onClick={registrar}
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
