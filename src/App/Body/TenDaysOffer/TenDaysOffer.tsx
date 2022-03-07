import React from 'react';
import styles from './tendaysoffer.css';
import { TextDiv } from '../../../modules/TextDiv';
import firstLine from '../../../img/tenDaysOffer/firstLine.png';
import secondLine from '../../../img/tenDaysOffer/secondLine.png';
import { Image } from '../../../modules/Image/Image'
import classNames from '../../../modules/className';
import tenDaysOffer from '../../arrays/tenDaysOfferList';
import { List } from '../../../modules/List';
import { Btn } from '../../../modules/Btn';

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
      <div className={styles.containerImg}>
        <Image cl={classNames(styles.image, styles.firstLine)} src={firstLine} alt='first line' />
      </div>
      <div className={styles.containerImg}>
        <Image cl={classNames(styles.image, styles.secondLine)} src={secondLine} alt='second line' />
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
