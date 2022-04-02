import React from 'react';
import classNames from '../className';
import styles from './btn.css';

interface IBtn {
  text?: string;
  inverse?: boolean;
  a?: boolean;
  href?: string;
  header?: boolean;
  bottomNav?: string;
  handler?: () => void;
}

export function Btn({ text, inverse = false, a = false, href, header = false, bottomNav, handler = () => { } }: IBtn) {

  let classes = '';
  let mainClass = '';
  inverse ? classes = styles.inverse : '';
  header ? mainClass = classNames(styles.button, styles.header) : mainClass = styles.button;
  bottomNav ? mainClass = classNames(styles.button, bottomNav) : '';

  if (a) {
    return (
      <a className={classNames(mainClass, styles.block, classes)} href={href} target='_blank' onClick={(e) => e.preventDefault}>
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
    <button className={classNames(mainClass, classes)} onClick={handler}>
      <span className={styles.buttonTitle}>
        <span data-text={text}>{text}</span>
      </span>
      <span className={styles.buttonRipple}>
        <span></span>
      </span>
    </button>
  )
}
