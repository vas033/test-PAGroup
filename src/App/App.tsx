import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../css/fonts.css';
import '../css/fonts/VisbyCf/style.css';
import styles from './app.css';
import { Header } from './Header';
import { Layout } from './Layout';
import { Body } from './Body';
import { Btn } from '../modules/Btn';
import SliderOne from './Body/SliderOne/SliderOne';
import "slick-carousel/slick/slick.css";
import SliderTwo from './Body/SliderTwo/SliderTwo';
import classNames from '../modules/className';
import { TenDaysOffer } from './Body/TenDaysOffer';
import backHead1 from '../img/background.png';
import { Comments } from './Body/Comments';
import { FAQ } from './Body/FAQ';
import { Footer } from './Footer';
import { Offer } from './Body/Offer';
import { FourReasons } from './Body/FourReasons';
import { SectionTitle } from './Body/SectionTitle';
import { FolderOffer } from './Body/FolderOffer';
import { CookieWindow } from './CookieWindow';
import { scroll } from '../hooks/scroll';
import getCoords from '../modules/getCoords';

export function App() {
  const { scrollPos, windowHeight, windowWidth } = scroll();
  const faceBlock = document.getElementById('faceBlock');

  if (faceBlock) {
    const divHeight = getCoords(faceBlock).bottom - getCoords(faceBlock).top;
    windowHeight > divHeight ? faceBlock.style.height = `${windowHeight}px` : '';
  }

  return (
    <Layout>
      <CookieWindow />
      <div id='faceBlock' className={classNames(styles.backgroundHead, styles.paddingSides)}>
        <img className={styles.backgroundHeadImg} src={backHead1} alt='bacground header' onContextMenu={()=>{return false}} />
        <div className={styles.inherit}>
          <div className={styles.header}>
            <Header scrollPos={scrollPos} />
          </div>
          <SectionTitle />
        </div>
      </div>
      <Body>
        <SliderOne />
        <Offer />
        <SliderTwo />
        <div className={styles.orientCenter}>
          <Btn text='смотреть на behance' a={true} href='#' />
        </div>
        <FourReasons />
        <h2 className={classNames(styles.sectionTitle, styles.sectionPadding)}>Спецпроекты</h2>
        <FolderOffer scrollPos={scrollPos} windowHeight={windowHeight} windowWidth={windowWidth} />
        <TenDaysOffer />
        <Comments scrollPos={scrollPos} windowHeight={windowHeight} />
        <FAQ />
      </Body>
      <Footer />
    </Layout>
  );
}
