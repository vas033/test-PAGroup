import React, { useEffect, useState } from 'react';
import { scroll } from '../../hooks/scroll';
import styles from './header.css';
import { Logo } from './Logo';
import { NavHeader } from './NavHeader';

let currentPosition = 0;

export function Header() {
  let pos = scroll();
  
  let header = styles.header;

  if (window.innerWidth >= 1440) {
    let scrollPosition = pos.scrollPos;
    if (scrollPosition > 20) {
      header = styles.header + ' ' + styles.hide;
    } else {
      header = styles.header;
    }


    if (header.includes(styles.hide)) {
      scrollPosition < currentPosition && scrollPosition > 25 ? header = styles.header + ' ' + styles.fixed : header = styles.header;
      currentPosition = scrollPosition;
    };
  };

  return (
    <div className={header}>
      <Logo />
      <NavHeader />
    </div>
  );
}
