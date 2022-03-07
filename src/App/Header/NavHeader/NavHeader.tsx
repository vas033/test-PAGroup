import React, { useState } from 'react';
import { ProgressPlugin } from 'webpack';
import classNames from '../../../modules/className';
import navHeader from '../../arrays/navHeader';
import styles from './navheader.css';

export function NavHeader() {
  return (
    <div className={styles.navigationDiv}>
      <nav className={styles.nav}>
        {navHeader.map(el => <a className={styles.navLink} href={el.link} key={navHeader.indexOf(el)} >{el.name}</a>)}
      </nav>
      <div>
        <button
          id='ru'
          className={classNames(styles.langBtn, styles.active)}
          onClick={(e) => {
            const btn = e.currentTarget;
            const eng = document.getElementById('eng');
            eng?.classList.contains(styles.active) ? eng?.classList.remove(styles.active) : '';
            btn.classList.contains(styles.active) ? '' : btn.classList.add(styles.active);
          }
          }>
          ru
          </button>
        <span>/</span>
        <button
          id='eng'
          className={styles.langBtn}
          onClick={(e) => {
            const btn = e.currentTarget;
            const ru = document.getElementById('ru');
            ru?.classList.contains(styles.active) ? ru?.classList.remove(styles.active) : '';
            btn.classList.contains(styles.active) ? '' : btn.classList.add(styles.active);
          }}>
          eng
        </button>
      </div>
    </div>
  );
}
