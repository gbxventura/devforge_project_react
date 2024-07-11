import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css';

const Register = () => {
  return (
    <div className={styles.formulario}>
      <h2>Cadastrar Usuário</h2>
      <form onSubmit=''>
        <div className={styles.adm}>
          <label htmlFor='username'>Nome de Usuário:</label>
          <input
            id='username'
            type='text'
            value=''
            onChange=''
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
            value=''
            onChange=''
            placeholder='Senha'
            required
            className={styles.inputField}
          />
        </div>
        <div className={styles.btn}>
          <button type='submit' className={styles.buttonLogin}>
            Registrar
          </button>
          <button type='button' onClick='' className={styles.buttonHome}>
            Voltar para Home
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
