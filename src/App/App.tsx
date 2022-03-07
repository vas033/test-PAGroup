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
import SliderOffer from './Body/SliderOffer/SliderOffer';
import { TenDaysOffer } from './Body/TenDaysOffer';
import backHead from '../img/background.png';
import { Comments } from './Body/Comments';
import { FAQ } from './Body/FAQ';
import { Footer } from './Footer';
import { Offer } from './Body/Offer';
import { FourReasons } from './Body/FourReasons';
import { SpecialProjects } from './Body/SpesialProjects'
import { SectionTitle } from './Body/SectionTitle';
import { SectionAbout } from './Body/SectionAbout';

export function App() {
  return (
    <Layout>
      <div className={classNames(styles.backgroundHead, styles.paddingSides)}>
        <img className={styles.backgroundHeadImg} src={backHead} alt='bacground header' />
        <div className={styles.inherit}>
          <Header />
          <SectionTitle />
        </div>
      </div>
      <Body>
        <SliderOne />
        <Offer />
        <SliderTwo />
        <div className={styles.orientCenter}>
          <Btn text='смотреть на Behance' a={true} href='#' />
        </div>
        <FourReasons />
        <h2 className={classNames(styles.sectionTitle, styles.sectionPadding)}>Спецпроекты</h2>
        <SpecialProjects />
        <SliderOffer />
        <TenDaysOffer />
        <Comments />
        <FAQ />
      </Body>
      <Footer />
    </Layout>
  );
}
