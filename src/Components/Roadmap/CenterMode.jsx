import Slider from 'react-slick';
import card1 from '../../assets/imgs/portifolio8.png';
import card2 from '../../assets/imgs/protifolio11.jpg';
import card3 from '../../assets/imgs/protifolio9.jpg.jpg';
import styles from './Roadmap.module.css';

function CenterMode() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.slider_container}>
      <div className={styles.titulo_roadmap} id='roadmap'>
        <h1 className={styles.h1_roadmap}>
          Road<span>Map</span>
        </h1>
      </div>
      <Slider {...settings}>
        <div>
          <h3>Título</h3>
          <img src={card1} alt='Card 1' />
        </div>
        <div>
          <h3>Título</h3>
          <img src={card2} alt='Card 2' />
        </div>
        <div>
          <h3>Título</h3>
          <img src={card3} alt='Card 3' />
        </div>
        <div>
          <h3>Título</h3>
          <img src={card1} alt='Card 1' />
        </div>
        <div>
          <h3>Título</h3>
          <img src={card2} alt='Card 2' />
        </div>
        <div>
          <h3>Título</h3>
          <img src={card3} alt='Card 3' />
        </div>
      </Slider>
    </div>
  );
}

export default CenterMode;
