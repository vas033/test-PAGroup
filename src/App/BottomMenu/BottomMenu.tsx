import React from 'react';
import { Btn } from '../../modules/Btn';
import { List } from '../../modules/List';
import navHeader from '../arrays/navHeader';
import styles from './bottommenu.css';
interface IBottomMenu {
  scrollPos: number
}

export function BottomMenu({scrollPos}:IBottomMenu) {
  const bottomMenu = navHeader.slice(0, 3);
  const menu = document.getElementById('bottomMenu');

  if (menu && scrollPos > 50) {
    menu.style.transform = 'translateY(0%)';
  } else if (menu && scrollPos < 50) {
    menu.style.transform = 'translateY(100%)'; 
  }

  return (
    <div id='bottomMenu' className={styles.container}>
      <nav className={styles.nav}>
        {bottomMenu.map(el => <Btn key={el.name} a={true} href={el.link} bottomNav={styles.link} text={el.name}/>)}
      </nav>
    </div>
  );
}
