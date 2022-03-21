import React, { useEffect, useState } from 'react';
import { scroll } from '../../hooks/scroll';
import classNames from '../../modules/className';
import getCoords from '../../modules/getCoords';
import navList from '../arrays/navList';
import styles from './footer.css';

export function Footer() {
  let pos = scroll();

  const footer = document.getElementById('footer');
  const content = document.getElementById('footerContent')
  let coords;

  if (footer && content) {
    coords = getCoords(footer);
    footer.style.overflow = 'hidden';
    content.style.transform = 'translate3d( 0, -50%, 0)';
    content.style.willChange = 'transform';

    let currentPos = pos.scrollPos + pos.windowHeight;

    if (currentPos > coords.top) {

      let tenThousandth = (coords.bottom - coords.top) / 10000;
      let showedBlockHeight = currentPos - coords.top;
      let percent = -50 + showedBlockHeight * tenThousandth;

      if (content && percent <= 0) {
        content.style.transform = `translate3d( 0, ${percent}%, 0)`;
        content.style.willChange = 'transform';
      } else {
        content.style.transform = 'translate3d( 0, 0, 0)';
      }
    }
  }



  return (
    <footer id='footer'>
      <div id='footerContent' className={classNames(styles.container, styles.flexColumn)}>
        <h2 className={styles.title}>Сделаем уже что-нибудь?</h2>
        <div className={styles.hiddenLinkContainer}>
          <a className={styles.hiddenLink} href="mailto:dsgn@pagroup.ru">Давайте начнём</a>
          <div className={styles.hiddenLinkBorder}></div>
        </div>
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
      </div>
    </footer>
  );
}
