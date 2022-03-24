import React, { useEffect, useState } from 'react';
import { scroll } from '../../hooks/scroll';
import styles from './header.css';
import { Logo } from './Logo';
import { NavHeader } from './NavHeader';

interface IMyProps {
  scrollPos?: number,
  windowHeight?: number,
  windowWidth?: number
}

let currentPosition = 0;

export function Header({ scrollPos, windowHeight, windowWidth }: IMyProps) {
  
  let header = styles.header;
  if (scrollPos) {

    if (window.innerWidth >= 1440) {
      if (scrollPos > 20) {
        header = styles.header + ' ' + styles.hide;
      } else {
        header = styles.header + ' ' + styles.fixed;
      }


      if (header.includes(styles.hide)) {
        scrollPos < currentPosition && scrollPos > 25 ? header = styles.header + ' ' + styles.fixed : header = styles.header + ' ' + styles.hide;
        currentPosition = scrollPos;
      };
    };
  }

  return (
    <div className={header}>
      <Logo />
      <NavHeader />
    </div>
  );
}
