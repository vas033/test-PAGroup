import React from 'react';
import classNames from '../../modules/className';
import navList from '../arrays/navList';
import styles from './footer.css';

export function Footer() {
  return (
    <footer className={classNames(styles.container, styles.flexColumn)}>
      <h2 className={styles.title}>Сделаем уже что-нибудь?</h2>
      <a className={styles.hiddenLink} href="mailto:dsgn@pagroup.ru">Давайте начнём</a>
      <div className={styles.infoNav}>
        <div className={styles.infoContainer}>
          <a className={styles.mail} href="mailto:dsgn@pagroup.ru">dsgn@pagroup.ru</a>
          <div className={styles.firmTaxInfo}>
            <p className={styles.firmInfo}>ИП Антипов ПН</p>
            <p className={styles.firmInfo}>ИНН 550516521644</p>
          </div>
        </div>
        <nav className={classNames(styles.flexColumn, styles.nav)}>
          {navList.map(el =>
            <a className={styles.navLinks} key={navList.indexOf(el)} href={el.link}>{el.name}</a>
          )}
        </nav>
      </div>
      <p className={styles.lisence}>Любое использование материалов сайта без разрешения запрещено</p>
    </footer>
  );
}
