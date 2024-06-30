import React from 'react';
import styles from "./Home.module.css"
import img_home from "../../assets/imgs/home-img.png";

const Home = () => {
    return (
        <>
            <div className={styles.home}>
                <div className={styles.home_content}>
                    <h4>Criação de Sites Profissionais</h4>
                    <h1>Transformando Ideias em Projetos Profissionais</h1>
                    <p>Somos uma agência especializada na criação de sites e plataformas
                        digitais para empresas, focada em projetar, desenvolver e gerenciar
                        soluções profissionais para a web.</p>
                    <a href="#orcamento" className={styles.btn_orcamento}>Quero um orçamento</a>
                </div>
                <div class="img">
                    <img src={img_home} alt="imagem-principal" />
                </div>
            </div>
        </>
    );
}

export default Home;
