import React from 'react';
import styles from './sliderone.css';
import Slider from "react-slick";
import partnerList from '../../arrays/partnerList';
import {Image} from '../../../modules/Image/Image';

export default class AutoPlay extends React.Component {
  render() {
    const settings = {
      arrows: false,
      centerMode: true,
      infinite: true,
      autoplay: true,
      speed: 600,
      autoplaySpeed: 600,
      cssEase: 'linear',
      variableWidth: true,
    };
    return (
        <Slider className={styles.slider} {...settings}>
          { partnerList.map( (item) => <Image cl={styles.image} src={item.src} alt={item.name} key={item.name}/>) }
        </Slider>
    );
  }
}
