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

  let classes = '';
  let mainClass = '';
  inverse ? classes = styles.inverse : '';
  header ? mainClass = classNames(styles.button, styles.header) : mainClass = styles.button;

  if (a) {
    return (
      <a className={classNames(styles.button, styles.block, classes)} href={href} onClick={(e) => e.preventDefault}>
        <span className={styles.buttonTitle}>
          <span data-text={text}>{text}</span>
        </span>
        <span className={styles.buttonRipple}>
          <span></span>
        </span>
      </a>
    )
  }

  return (
    <button className={classNames(mainClass, classes)} onClick={(e) => e.preventDefault}>
      <span className={styles.buttonTitle}>
        <span data-text={text}>{text}</span>
      </span>
      <span className={styles.buttonRipple}>
        <span></span>
      </span>
    </button>
  )
}
