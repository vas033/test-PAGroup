import React from 'react';
import styles from './sliderone.css';
import carousel from './sliderstyle.css';
import partnerList from '../../arrays/partnerList';
import { Image } from '../../../modules/Image/Image';
import getCoords from '../../../modules/getCoords';
import { scroll } from '../../../hooks/scroll';

export default function SliderOneTest() {
  return (
    <div className={carousel.maindiv}>
      <div id='firstImgDiv' className={carousel.div1}>
        {partnerList.map((item) => <Image cl={styles.image} src={item.src} alt={item.name} key={item.name} />)}
      </div>
      <div id='secondImgDiv' className={carousel.div2}>
        {partnerList.map((item) => <Image cl={styles.image} src={item.src} alt={item.name} key={item.name} />)}
      </div>
    </div>
  )
}
