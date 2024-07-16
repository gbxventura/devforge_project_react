import { Link } from 'react-router-dom';
import styles from './Headeradm.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Headeradm = ({ setSearchTerm }) => {
  return (
    <header className={styles.headerAdm}>
      <form action=''>
        <div className={styles.search}>
          <div className={styles.lupa}>
            <i className='bi bi-search'></i>
          </div>
          <div className={styles.input}>
            <input
              type='text'
              name='ipt-adm'
              id='inpt-adm'
              placeholder='Pesquise o formulario'
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </form>

      <div className={styles.right}>
        <div className={styles.admperfil}>
          <div className={styles.menun}>
            <Link className={styles.linkVoltar} to={'/'}>
              <p>Voltar</p>
            </Link>
          </div>
          <div className={styles.dropdown}></div>
        </div>
      </div>
    </header>
  );
};

export default Headeradm;
