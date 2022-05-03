import React, { useEffect, useState } from 'react';
import styles from './tendaysoffer.css';
import { TextDiv } from '../../../modules/TextDiv';
import mainImg from '../../../img/tenDaysOffer/mainImg.png';
import classNames from '../../../modules/className';
import tenDaysOffer from '../../arrays/tenDaysOfferList';
import { List } from '../../../modules/List';
import { Btn } from '../../../modules/Btn';
import { Image } from '../../../modules/Image/Image';

export function TenDaysOffer() {
  return (
    <div className={styles.sectionTen}>
      <TextDiv
        cl={styles.container}
        title='Крутые лендинги'
        titleBold='за 10 дней'
        text='Сделаем крутой лендинг и выделим вас среди конкурентов.
         Посетители точно захотят нажать заветную кнопку.'
        clTitle={styles.title}
        clSubTitle={styles.subTitle}
        clText={classNames(styles.marginBottom50, styles.description)}
      />
      <div className={styles.containerImg}>
        <Image src={mainImg} alt='Status Finance image' clImg={styles.image} />
      </div>
      <ul className={classNames(styles.list, styles.container)}>
        {tenDaysOffer.map((el) => <List cl={classNames(styles.padding25, styles.item)} clLi={styles.textItemWidth} item={el.title} longText={true} clLongTextPart={styles.longTextDesc} longTextPart={el.desc} key={tenDaysOffer.indexOf(el)} />)}
      </ul>
      <div className={classNames(styles.container, styles.padding25, styles.btn)}>
        <Btn text='хочу крутой лендинг' inverse={true} a={true} href='https://pa-sales.bitrix24.site/' />
      </div>
    </div>
  );
}
