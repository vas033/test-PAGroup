import React, { useEffect, useState } from 'react';
import classNames from '../../../modules/className';
import styles from './navheader.css';
import burger from './burger.css';
import navList from '../../arrays/navList';

export function NavHeader() {
  function onClick() {
    const btn = document.getElementById('burger');
    const menu = document.getElementById('menu');
    btn ? btn.classList.toggle(burger.open) : '';
    menu ? menu.classList.toggle(burger.showMenu) : '';
  }

  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (width < 1440) {
    return (
      <div className={burger.menuContainer}>
        <button className={burger.container} id='burger' onClick={() => onClick()}>
          <span className={burger.burger}>
            <span></span>
            <span></span>
          </span>
        </button>
        <div className={burger.hiddenMenu} id='menu'>
          <div className={burger.menu}>
            <nav className={styles.nav}>
              {navList.map(el => 
                  <a className={styles.navLink} href={el.link} key={navList.indexOf(el)} onClick={() => onClick()}>
                    <span className={styles.navSpan}>{el.name}</span>
                    <span className={classNames(styles.navSpan, styles.navBorder)}></span>
                    </a>                  
              )}
            </nav>
            <div>
              <button
                id='ru'
                className={classNames(styles.langBtn, styles.active)}
                onClick={(e) => {
                  const btn = e.currentTarget;
                  const eng = document.getElementById('eng');
                  eng?.classList.contains(styles.active) ? eng?.classList.remove(styles.active) : '';
                  btn.classList.contains(styles.active) ? '' : btn.classList.add(styles.active);
                }
                }>
                ru
              </button>
              <span>/</span>
              <button
                id='eng'
                className={styles.langBtn}
                onClick={(e) => {
                  const btn = e.currentTarget;
                  const ru = document.getElementById('ru');
                  ru?.classList.contains(styles.active) ? ru?.classList.remove(styles.active) : '';
                  btn.classList.contains(styles.active) ? '' : btn.classList.add(styles.active);
                }}>
                eng
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.navigationDiv}>
        <nav className={styles.nav}>
          {navList.map(el => 
                  <a className={styles.navLink} href={el.link} key={navList.indexOf(el)} onClick={() => onClick()} >
                    <span className={styles.navSpan}>{el.name}</span>
                    <span className={classNames(styles.navSpan, styles.navBorder)}></span>
                  </a>                  
              )}
        </nav>
        <div>
          <button
            id='ru'
            className={classNames(styles.langBtn, styles.active)}
            onClick={(e) => {
              const btn = e.currentTarget;
              const eng = document.getElementById('eng');
              eng?.classList.contains(styles.active) ? eng?.classList.remove(styles.active) : '';
              btn.classList.contains(styles.active) ? '' : btn.classList.add(styles.active);
            }
            }>
            ru
            </button>
          <span>/</span>
          <button
            id='eng'
            className={styles.langBtn}
            onClick={(e) => {
              const btn = e.currentTarget;
              const ru = document.getElementById('ru');
              ru?.classList.contains(styles.active) ? ru?.classList.remove(styles.active) : '';
              btn.classList.contains(styles.active) ? '' : btn.classList.add(styles.active);
            }}>
            eng
          </button>
        </div>
      </div>
    );
  }
}
