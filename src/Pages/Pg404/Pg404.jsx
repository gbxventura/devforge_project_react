import styles from './Pg404.module.css';
import img404 from '../../assets/imgs/pg404.jpg';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/index';
import Footer from '../../Components/Footer/index';

const Pg404 = () => {
  let navigate = useNavigate();
  const irParaHome = () => {
    navigate('/');
  };
  return (
    <section className={styles.pg404}>
      <Header />
      <img src={img404} style={{ marginTop: '20%' }} alt='erro 404 img' />
      <h1 style={{ color: 'red', fontSize: 65, textAlign: 'center' }}>
        ERRO 404
      </h1>
      <p style={{ color: 'white', fontSize: 30, textAlign: 'center' }}>
        Pagina não encontrada <br />
        <button
          onClick={irParaHome}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'red',
            fontSize: 25,
          }}
        >
          Voltar para o INICIO
        </button>
      </p>
      <Footer />
    </section>
  );
};

export default Pg404;
