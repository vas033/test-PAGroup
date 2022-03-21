import React, { useEffect, useState } from 'react';
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
import classNames from '../../../modules/className';
import tenDaysOffer from '../../arrays/tenDaysOfferList';
import { List } from '../../../modules/List';
import { Btn } from '../../../modules/Btn';
import ScrollAnimation from 'react-animate-on-scroll';
import getCoords from '../../../modules/getCoords';
import { scroll } from '../../../hooks/scroll';

export function TenDaysOffer() {
  let pos = scroll();

  const container = document.getElementById('linesContainer');
  const first = document.getElementById('firstImgLine');
  const second = document.getElementById('secondImgLine');


  if (first && second && container) {
    let coordsFirst = getCoords(first);
    let coordsSecond = getCoords(second);
    container.style.overflow = 'hidden';
    let currentPos = pos.scrollPos + pos.windowHeight;

    let firstLineHeigth = coordsFirst.bottom - coordsFirst.top;
    let secondLineHeigth = coordsSecond.bottom - coordsSecond.top;
    let thousandthFirst = firstLineHeigth / 1000;
    let thousandthSecond = secondLineHeigth / 1000;

    let showedFirstLineHeight = currentPos - coordsFirst.top;
    let showedSecondLineHeight = currentPos - coordsSecond.top;
    let percentFirst = 100 - showedFirstLineHeight * thousandthFirst;
    let percentSecond = -100 + showedSecondLineHeight * thousandthSecond;

    first.style.transform = 'translateX(100%)';
    first.style.willChange = 'transform';

    second.style.transform = 'translateX(-120%)';
    second.style.willChange = 'transform';

    if (currentPos > coordsFirst.top) {
      percentFirst >= -20 ? first.style.transform = `translateX(${percentFirst}%)` : first.style.transform = 'translateX(-20%)';
    };

    if (currentPos > coordsFirst.top) {
      percentSecond <= 0 ? second.style.transform = `translateX(${percentSecond}%)` : second.style.transform = 'translateX(0)';
    }
  }

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
      <div id='linesContainer'>
        <div id='firstImgLine' className={classNames(styles.containerImg, styles.first_line)}>
          <img src={one} alt="one" className={styles.image} />
          <img src={two} alt="two" className={styles.image} />
          <img src={three} alt="three" className={styles.image} />
          <img src={four} alt="four" className={styles.image} />
        </div>
        <div id='secondImgLine' className={styles.containerImg}>
          <img src={five} alt="five" className={styles.image} />
          <img src={six} alt="six" className={styles.image} />
          <img src={seven} alt="seven" className={styles.image} />
          <img src={eight} alt="eight" className={styles.image} />
        </div>
      </div>
      <ul className={classNames(styles.list, styles.container)}>
        {tenDaysOffer.map((el) => <List cl={classNames(styles.padding25, styles.item)} clLi={styles.textItemWidth} item={el} key={tenDaysOffer.indexOf(el)} />)}
      </ul>
      <div className={classNames(styles.container, styles.padding25, styles.btn)}>
        <Btn text='хочу крутой инфо сайт' inverse={true} />
      </div>
    </div>
  );
}
