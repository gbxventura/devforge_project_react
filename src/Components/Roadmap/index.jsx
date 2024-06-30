import React from 'react';
import styles from './Roadmap.module.css';
import card1 from '../../assets/imgs/card1.png';
import card2 from '../../assets/imgs/card2.png';
import card3 from '../../assets/imgs/card3.png';

const Roadmap = () => {
    const roadmapItems = [
        { img: card1, title: 'Escolha seu Website', subtitle: 'Sites sob Medidas' },
        { img: card2, title: 'Escolha seu Website', subtitle: 'Sites sob Medidas' },
        { img: card3, title: 'Adicionais', subtitle: 'Entre em Contato' }
    ];

    return (
        <>
            <div className={styles.titulo_roadmap}>
                <h1 className={styles.h1_roadmap}>Road<span>Map</span></h1>
            </div>
            <section className={styles.roadmap}>
                {roadmapItems.map((item, index) => (
                    <div className={styles.road__box} key={index}>
                        <div className={styles.imgBx}>
                            <img src={item.img} alt={`card${index + 1}-roadmap`} />
                        </div>
                        <div className={styles.road__content}>
                            <h2>{item.title}<br /><span>{item.subtitle}</span></h2>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}

export default Roadmap;
