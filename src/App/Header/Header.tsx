import React, { useEffect, useState } from 'react';
import styles from './header.css';
import { Logo } from './Logo';
import { NavHeader } from './NavHeader';

let currentPosition = 0;

export function Header() {
  const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
  
    useEffect(() => {
      const updatePosition = () => {
        setScrollPosition(window.pageYOffset);
      }
      window.addEventListener("scroll", updatePosition);
      updatePosition();
      return () => window.removeEventListener("scroll", updatePosition);
    }, []);
  
    return scrollPosition;
  };

  let scrollPosition = useScrollPosition();
  let header = '';
  if (scrollPosition > 20) {
    header =  styles.header + ' ' + styles.hide;
  } else {
    header = styles.header;
  }
  
  if (header.includes(styles.hide)) {
    scrollPosition < currentPosition && scrollPosition > 25 ? header = styles.header + ' ' + styles.fixed :  header = styles.header;
    currentPosition = scrollPosition;
  };

  return (
    <div className={header}>
      <Logo />
      <NavHeader />
    </div>
  );
}
