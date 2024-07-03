import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async e => {
    e.preventDefault();
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (response.status === 200) {
        alert('Usuário registrado com sucesso!');
        navigate('/login');
      } else {
        const data = await response.text();
        alert(`Falha ao registrar: ${data}`);
      }
    } catch (error) {
      console.error('Erro de registro:', error);
      alert('Erro ao tentar registrar');
    }
  };

  return (
    <div className={styles.formulario}>
      <h2>Cadastrar Usuário</h2>
      <form onSubmit={handleRegister}>
        <div className={styles.adm}>
          <label htmlFor='username'>Nome de Usuário:</label>
          <input
            id='username'
            type='text'
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder='Nome de usuário'
            required
            className={styles.inputField}
          />
        </div>
        <div className={styles.adm}>
          <label htmlFor='password'>Senha:</label>
          <input
            id='password'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder='Senha'
            required
            className={styles.inputField}
          />
        </div>
        <div className={styles.btn}>
          <button type='submit' className={styles.buttonLogin}>
            Registrar
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

export default Register;
