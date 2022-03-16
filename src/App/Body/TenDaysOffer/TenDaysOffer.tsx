import React from 'react';
import styles from './tendaysoffer.css';
import { TextDiv } from '../../../modules/TextDiv';
import one from '../../../img/tenDaysOffer/one.png';
import two from '../../../img/tenDaysOffer/two.png';
import three from '../../../img/tenDaysOffer/three.png';
import four from '../../../img/tenDaysOffer/four.png';
import five from '../../../img/tenDaysOffer/five.png';
import six from '../../../img/tenDaysOffer/six.png';
import seven from '../../../img/tenDaysOffer/seven.png';
import eight from '../../../img/tenDaysOffer/eight.png';
import { Image } from '../../../modules/Image/Image'
import classNames from '../../../modules/className';
import tenDaysOffer from '../../arrays/tenDaysOfferList';
import { List } from '../../../modules/List';
import { Btn } from '../../../modules/Btn';
import ScrollAnimation from 'react-animate-on-scroll';

export function TenDaysOffer() {
  return (
    <div className={styles.sectionTen}>
      <TextDiv
        cl={styles.container}
        title='Креативные информационные
      сайты '
        titleBold='за 10 дней'
        text='Сделаем крутой информационный сайт и выделим вас среди конкурентов. Посетители точно захотят нажать заветную кнопку.'
        clTitle={styles.title}
        clText={classNames(styles.marginBottom50, styles.description)}
      />
      <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutRight" delay={2}>
        <div className={classNames(styles.containerImg, styles.first_line)}>
          <img src={one} alt="one" className={styles.image} />
          <img src={two} alt="two" className={styles.image} />
          <img src={three} alt="three" className={styles.image} />
          <img src={four} alt="four" className={styles.image} />
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="bounceInLeft" animateOut="bounceOutLeft" delay={2}>
        <div className={styles.containerImg}>
          <img src={five} alt="five" className={styles.image} />
          <img src={six} alt="six" className={styles.image} />
          <img src={seven} alt="seven" className={styles.image} />
          <img src={eight} alt="eight" className={styles.image} />
        </div>
      </ScrollAnimation>
      <ul className={classNames(styles.list, styles.container)}>
        {tenDaysOffer.map((el) => <List cl={classNames(styles.padding25, styles.item)} clLi={styles.textItemWidth} item={el} key={tenDaysOffer.indexOf(el)} />)}
      </ul>
      <div className={classNames(styles.container, styles.padding25, styles.btn)}>
        <Btn text='хочу крутой инфо сайт' inverse={true} />
      </div>
    </div>
  );
}
