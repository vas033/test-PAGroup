import React from 'react';
import classNames from '../className';
import styles from './btn.css';

interface IBtn {
  text?: string;
  inverse?: boolean;
  a?: boolean;
  href?: string;
  header?: boolean;
}

export function Btn({ text, inverse = false, a = false, href, header = false }: IBtn) {

  let classes = ' ';
  let mainClass = '';
  inverse ? classes = classNames(styles.inverse, styles.buttonRipple) : classes = styles.buttonRipple;
  header ? mainClass = classNames(styles.button, styles.header) : mainClass = styles.button;

  if (a) {
    return (
      <a className={classNames(styles.button, styles.block)} href={href} onClick={(e) => e.preventDefault}>
        <span className={styles.buttonTitle}>
          <span data-text={text}>{text}</span>
        </span>
        <span className={classes}>
          <span></span>
        </span>
      </a>
    )
  }

  return (
    <button className={mainClass} onClick={(e) => e.preventDefault}>
      <span className={styles.buttonTitle}>
        <span data-text={text}>{text}</span>
      </span>
      <span className={classes}>
        <span></span>
      </span>
    </button>
  )
}
