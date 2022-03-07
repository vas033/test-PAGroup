import React from 'react';
import classNames from '../className';
import styles from './btn.css';

interface IBtn {
  text?: string;
  img?: React.ReactNode;
  inverse?: boolean;
  a?: boolean;
  href?: string;
  header?: boolean;
}

export function Btn({text, img, inverse = false, a = false, href, header = false}: IBtn) {
  if (a) {
    if (inverse) {
      return (
        <a className={classNames(styles.inverse, styles.block)} href={href}>
          {img}
          {text}
        </a>  
      )
    } else {
      return (
        <a className={classNames(styles.button, styles.block)} href={href}>
          {img}
          {text}
        </a>
      )
    }
  } else {
    if (inverse) {
      let headerClass;
      header ? headerClass = classNames(styles.inverse, styles.header) : headerClass = styles.inverse;
      return (
        <button className={headerClass}>
          {img}
          {text}
        </button>  
      )
    } else {
      return (
        <button className={styles.button}>
          {img}
          {text}
        </button>
      )
    }
  }
}
