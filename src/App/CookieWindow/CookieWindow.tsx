import React from 'react';
import styles from './cookiewindow.css';
import close from '../../img/close.svg';

export function CookieWindow() {
  const handler =() => {
    const container = document.getElementById('cookies');
    container ? container.remove() : '';
  }

  return (
    <div id='cookies' className={styles.container}>
      <p className={styles.desc}>Если что, мы используем куки</p>
      <button className={styles.btn} onClick={handler}>
        <img src={close} alt="close btn" />
      </button>
    </div>
  );
}
