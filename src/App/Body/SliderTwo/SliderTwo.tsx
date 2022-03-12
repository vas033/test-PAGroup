import React from 'react';
import styles from './slidertwo.css';
import Slider from "react-slick";
// import sliderTwoImg from '../../arrays/sliderTwoArray';
import { Image } from '../../../modules/Image/Image';
import image1 from '../../../img/sliderTwo/image1.png';
import image2 from '../../../img/sliderTwo/image2.png';
import image3 from '../../../img/sliderTwo/image3.png';
import image4 from '../../../img/sliderTwo/image4.png';
import image5 from '../../../img/sliderTwo/image5.png';
import image6 from '../../../img/sliderTwo/image6.png';
import image7 from '../../../img/sliderTwo/image7.png';
import image8 from '../../../img/sliderTwo/image8.png';
import image9 from '../../../img/sliderTwo/image9.png';
import image10 from '../../../img/sliderTwo/image10.png';
import image11 from '../../../img/sliderTwo/image11.png';

export default class SliderTwo extends React.Component {
  render() {
    const settings = {
      arrows: false,
      centerMode: true,
      centerPadding: '22px',
      infinite: true,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 4000,
      variableWidth: true,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            variableWidth: false
          }
        },
      ]
    };
    return (
      <Slider className={styles.slider} {...settings}>
        <div>
          <Image cl={styles.image} src={image1} alt={'slider image'} />
          <Image cl={styles.image} src={image2} alt={'slider image'} />
          <Image cl={styles.image} src={image3} alt={'slider image'} />
        </div>
        <div>
          <Image cl={styles.image} src={image4} alt={'slider image'} />
          <Image cl={styles.image} src={image5} alt={'slider image'} />
        </div>
        <div>
          <Image cl={styles.image} src={image6} alt={'slider image'} />
          <Image cl={styles.image} src={image7} alt={'slider image'} />
        </div>
        <div>
          <Image cl={styles.image} src={image8} alt={'slider image'} />
          <Image cl={styles.image} src={image9} alt={'slider image'} />
        </div>
        <div>
          <Image cl={styles.image} src={image10} alt={'slider image'} />
          <Image cl={styles.image} src={image11} alt={'slider image'} />
        </div>
      </Slider>
    );
  }
}
