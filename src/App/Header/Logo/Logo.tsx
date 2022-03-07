import React from 'react';
import styles from './logo.css';
import logo from '../../../img/logo.png';

export function Logo() {
  return (
    <div className={styles.headerLogoDiv}>
      <img className={styles.headerLogo} src={logo} alt="logo" />
      <p className={styles.logoTitle}>
        <span className={styles.logoTitleMob}>КРЕАТИВНАЯ</span>
        <span className={styles.logoTitleDesc}>креативная команда</span>
      </p>
    </div>
  );
}
