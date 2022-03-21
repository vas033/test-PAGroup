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

export function App() {
  return (
    <Layout>
      <CookieWindow />
      <div className={classNames(styles.backgroundHead, styles.paddingSides)}>
        <img className={styles.backgroundHeadImg} src={backHead1} alt='bacground header' />
        <div className={styles.inherit}>
          <div className={styles.header}>
            <Header />
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
        <FolderOffer />
        <TenDaysOffer />
        <Comments />
        <FAQ />
      </Body>
      <Footer />
    </Layout>
  );
}
