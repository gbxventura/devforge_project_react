import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css';
import { toast } from 'react-toastify';
import logo from '../../../public/logo.png';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        toast.success('Usuário registrado com sucesso');
        navigate('/login'); // Redireciona para a página de login após o registro
      } else {
        toast.error('Usuário já existente');
      }
    } catch (error) {
      toast.error('Erro no servidor');
    }
  };

  return (
    <div className={styles.formulario}>
      <div className={styles.logoImg}>
        <img src={logo} alt="" />
      </div>
      <h2>Cadastrar Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.adm}>
          <label htmlFor='email'>E-mail:</label>
          <input
            id='email'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='E-mail'
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
