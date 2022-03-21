import React from 'react';
import classNames from '../../../modules/className';
import styles from './offer.css';

export function Offer() {
  return (
    <section className={classNames(styles.sectionPadding, styles.offer)}>
      <h2 className={styles.sectionTitle}>Что мы предлагаем</h2>
      <div className={styles.listTablet}>
        <h3 className={styles.subTitleGrey}> UX/UI </h3>
        <h3 className={styles.subTitleGreen}> Motion design and 3D </h3>
        <h3 className={styles.subTitleGrey}> Графический дизайн + SMM </h3>
        <h3 className={styles.subTitleGreyTwo}> NFT </h3>
        <h3 className={styles.subTitleRed}>
          <span>Рекламные ролики </span>
          <span className={styles.new}>СКОРО</span>
        </h3>
      </div>
      <div className={styles.listMobile}>
        <h3 className={styles.subTitleGrey}> UX/UI </h3>
        <h3 className={styles.subTitleGreyTwo}> NFT </h3>
        <h3 className={styles.subTitleGreen}> Motion design and 3D </h3>
        <h3 className={styles.subTitleGrey}> Графический дизайн + SMM </h3>
        <h3 className={styles.subTitleRed}>
            <span>Рекламные ролики</span>  
            <span className={styles.new}>СКОРО</span>
        </h3>
      </div>
    </section>
  );
}
