import React, { useEffect, useState } from 'react';
import styles from './header.css';
import { Logo } from './Logo';
import { NavHeader } from './NavHeader';

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
  let header;
  if (scrollPosition > 20) {
    header =  styles.header + ' ' + styles.hide
  } else {
    header = styles.header
  }

  console.log(scrollPosition)

  return (
    <div className={header}>
      <Logo />
      <NavHeader />
    </div>
  );
}
