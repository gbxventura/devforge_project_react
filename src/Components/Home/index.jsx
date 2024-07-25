import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import styles from './Home.module.css';
import img_home from '../../../public/homeImg.jpg';

const Home = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '20px',
      duration: 1000,
      reset: false,
    });

    sr.reveal(`.${styles.home_content} h4`, { delay: 500 });
    sr.reveal(`.${styles.home_content} h1`, { delay: 600 });
    sr.reveal(`.${styles.home_content} p`, { delay: 700 });
    sr.reveal(`.${styles.home_content} .${styles.btn_orcamento}`, {
      delay: 800,
    });
    sr.reveal(`.${styles.home} .img`, { delay: 1000 });
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.home_content}>
        <h4>Criação de sites profissionais</h4>
        <h1>Transformando ideias em projetos profissionais</h1>
        <p>
          Somos uma agência especializada na criação de sites e plataformas
          digitais para empresas, focada em projetar, desenvolver e gerenciar
          soluções profissionais para a web.
        </p>
        <a href='#contact' className={styles.btn_orcamento}>
          Quero um orçamento
        </a>
      </div>
      <div className='img'>
        <img src={img_home} alt='imagem-principal' />
      </div>
    </div>
  );
};

export default Home;
