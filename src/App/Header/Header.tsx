import React from 'react';
import styles from './header.css';
import { Logo } from './Logo';
import { NavHeader } from './NavHeader';

export function Header() {
  return (
    <div className={styles.header}>
      <Logo />
      <NavHeader />
    </div>
  );
}
