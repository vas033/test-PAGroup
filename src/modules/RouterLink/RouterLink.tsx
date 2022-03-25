import React from 'react';
import { Link } from 'react-router-dom';
import classNames from '../className';
import styles from './routerlink.css';

interface IMyRouterLink {
  href: string;
  text: string;
}

export function RouterLink({href, text}:IMyRouterLink) {
  return (
    <Link className={classNames(styles.button, styles.block)} to={href}>
      <span className={styles.buttonTitle}>
        <span data-text={text}>{text}</span>
      </span>
      <span className={styles.buttonRipple}>
        <span></span>
      </span>
    </Link>
  );
}
