import React from 'react';
import classNames from '../../../modules/className';
import styles from './offer.css';

export function Offer() {
  return (
    <section className={classNames(styles.sectionPadding, styles.offer)}>
      <h2 className={styles.sectionTitle}>Что мы предлагаем</h2>
      <div className={styles.listTablet}>
        <a href="#UI" className={styles.subTitleGrey}> UX/UI </a>
        <a href="#3D" className={styles.subTitleGreen}> Motion design and 3D </a>
        <a href="#SMM" className={styles.subTitleGrey}> Графический дизайн + SMM </a>
        <a href="#NFT" className={styles.subTitleGreyTwo}> NFT </a>
        <a href="#video" className={styles.subTitleRed}>
          <span>Рекламные ролики </span>
          <span className={styles.new}>СКОРО</span>
        </a>
      </div>
      <div className={styles.listMobile}>
        <a href="#UI" className={styles.subTitleGrey}> UX/UI </a>
        <a href="#NFT" className={styles.subTitleGreyTwo}> NFT </a>
        <a href="#3D" className={styles.subTitleGreen}> Motion design and 3D </a>
        <a href="#SMM" className={styles.subTitleGrey}> Графический дизайн + SMM </a>
        <a href="#video" className={styles.subTitleRed}>
            <span>Рекламные ролики</span>  
            <span className={styles.new}>СКОРО</span>
        </a>
      </div>
    </section>
  );
}
