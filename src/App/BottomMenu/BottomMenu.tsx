import React from 'react';
import { Btn } from '../../modules/Btn';
import classNames from '../../modules/className';
import { List } from '../../modules/List';
import navHeader from '../arrays/navHeader';
import styles from './bottommenu.css';
interface IBottomMenu {
  scrollPos: number
}

export function BottomMenu({ scrollPos }: IBottomMenu) {
  const bottomMenu = navHeader.slice(0, 3);
  const menu = document.getElementById('bottomMenu');

  if (menu && scrollPos > 50) {
    menu.style.transform = 'translateY(0%)';
  } else if (menu && scrollPos < 50) {
    menu.style.transform = 'translateY(100%)';
  }

  function handler(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    document.querySelectorAll(`.${styles.active}`)
      .forEach(el => el.classList.remove(styles.active));
    let link = event.currentTarget;
    link.classList.toggle(styles.active);
  }

  return (
    <div id='bottomMenu' className={styles.container}>
      <nav className={styles.nav}>
        <a
          key={bottomMenu[0].name}
          href={bottomMenu[0].link}
          className={classNames(styles.link, styles.active)}
          onClick={handler}
        >
          {bottomMenu[0].name}
        </a>
        <a
          key={bottomMenu[1].name}
          href={bottomMenu[1].link}
          className={styles.link}
          onClick={handler}
        >
          {bottomMenu[1].name}
        </a>
        <a
          key={bottomMenu[2].name}
          href={bottomMenu[2].link}
          className={styles.link}
          onClick={handler}
        >
          {bottomMenu[2].name}
        </a>
      </nav>
    </div>
  );
}
