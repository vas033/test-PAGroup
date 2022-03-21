import React from 'react';
import styles from './slideroffer.css';
import Slider from "react-slick";
import { Slide } from './Slide/Slide';
import slides from '../../../arrays/sliderOffer';
import { Image } from '../../../../modules/Image/Image';
import classNames from '../../../../modules/className';
import backRed from '../../../../img/backs/backRed.svg';
import backOrange from '../../../../img/backs/backOrange.svg';
import backGreen from '../../../../img/backs/backGreen.svg';

const className = styles.background;

export default class SliderOffer extends React.Component {
  render() {
    let settings = {
      arrows: false,
      infinite: false,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 1439,
          settings: {
            slidesToShow: 1.5,
          }
        },
      ]
    };

    const firstSlide = document.querySelector(`.${styles.marginSlide}`);
    firstSlide ? firstSlide.classList.add(`${styles.marginLeftFirst}`) : '' ;
    
    return (
      <div className={styles.background}>
        <Image cl={classNames(styles.backImg, styles.backImgRed)} src={backRed} alt='background red' />
        <Image cl={classNames(styles.backImg, styles.backImgOrange)} src={backOrange} alt='background orange' />
        <Image cl={classNames(styles.backImg, styles.backImgGreen)} src={backGreen} alt='background Green' />
        <Slider {...settings}>
          {slides.map(({ key, title, text, price, designer, firstList, offer }) => <Slide key={key} cl={styles.marginSlide} title={title} text={text} price={price} designer={designer} firstList={firstList} offer={offer} />)}
        </Slider>
      </div>
    );
  };
}
