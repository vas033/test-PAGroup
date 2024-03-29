import React, { useState } from 'react';
import { Btn } from '../../../../../modules/Btn';
import classNames from '../../../../../modules/className';
import { TextDiv } from '../../../../../modules/TextDiv';
import { List } from '../../../../../modules/List';
import styles from './slide.css';
import { generateRandomString } from '../../../../../modules/generateId';
import getCoords from '../../../../../modules/getCoords';

interface IMySlide {
  cl?: string;
  title: string;
  text: string;
  price?: string;
  designer?: string;
  firstList: string[];
  offer: string[];
  scrollPos?: number;
  windowWidth?: number;
}

const id = generateRandomString();

export function Slide(props: IMySlide) {
  if (props.windowWidth && props.windowWidth < 768) {
    const card = document.getElementById(id);
  
    if (card ) {
      const topCard = getCoords(card).top;
      const bottomCard = getCoords(card).bottom;
      let cardList = document.querySelectorAll(`.${styles.slide}`);
      cardList.forEach((el) => {
        if(props.scrollPos) {
          if (props.scrollPos >= topCard - 30 ) {
            el.classList.add(styles.cardAnim);
          } else if (props.scrollPos < topCard -30 || props.scrollPos > bottomCard) {
            el.classList.remove(styles.cardAnim);
          }
        }
      })
  
    }
  }

  return (
    <div id={id} className={classNames(styles.slide, props.cl)} >
      <div className={classNames(styles.flex33, styles.borderBottom)}>
        <TextDiv
          title={props.title}
          text={props.text}
          clTitle={styles.slideTitle}
        />
        <div className={styles.price}>{props.price}</div>
      </div>
      <div className={classNames(styles.flex25, styles.justifyStart)}>
        <h3 className={styles.subTitle}>Что включено:</h3>
        <ul className={classNames(styles.padding24)}>
          <li className={classNames(styles.li, styles.listItem)}>
            <div className={styles.image}>
              <svg className={styles.image} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 3C6.23858 3 4 5.23858 4 8C4 10.7614 6.23858 13 9 13C11.7614 13 14 10.7614 14 8C14 5.23858 11.7614 3 9 3ZM6 8C6 6.34315 7.34315 5 9 5C10.6569 5 12 6.34315 12 8C12 9.65685 10.6569 11 9 11C7.34315 11 6 9.65685 6 8Z" fill="#0A0620" />
                <path d="M16.9084 8.21828C16.6271 8.07484 16.3158 8.00006 16 8.00006V6.00006C16.6316 6.00006 17.2542 6.14956 17.8169 6.43645C17.8789 6.46805 17.9399 6.50121 18 6.5359C18.4854 6.81614 18.9072 7.19569 19.2373 7.65055C19.6083 8.16172 19.8529 8.75347 19.9512 9.37737C20.0496 10.0013 19.9987 10.6396 19.8029 11.2401C19.6071 11.8405 19.2719 12.3861 18.8247 12.8321C18.3775 13.2782 17.8311 13.6119 17.2301 13.8062C16.6953 13.979 16.1308 14.037 15.5735 13.9772C15.5046 13.9698 15.4357 13.9606 15.367 13.9496C14.7438 13.8497 14.1531 13.6038 13.6431 13.2319L13.6421 13.2311L14.821 11.6156C15.0761 11.8017 15.3717 11.9248 15.6835 11.9747C15.9953 12.0247 16.3145 12.0001 16.615 11.903C16.9155 11.8059 17.1887 11.639 17.4123 11.416C17.6359 11.193 17.8035 10.9202 17.9014 10.62C17.9993 10.3198 18.0247 10.0006 17.9756 9.68869C17.9264 9.37675 17.8041 9.08089 17.6186 8.82531C17.4331 8.56974 17.1898 8.36172 16.9084 8.21828Z" fill="#0A0620" />
                <path d="M19.9981 21C19.9981 20.475 19.8947 19.9551 19.6938 19.47C19.4928 18.9849 19.1983 18.5442 18.8271 18.1729C18.4558 17.8017 18.0151 17.5072 17.53 17.3062C17.0449 17.1053 16.525 17.0019 16 17.0019V15C16.6821 15 17.3584 15.1163 18 15.3431C18.0996 15.3783 18.1983 15.4162 18.2961 15.4567C19.0241 15.7583 19.6855 16.2002 20.2426 16.7574C20.7998 17.3145 21.2417 17.9759 21.5433 18.7039C21.5838 18.8017 21.6217 18.9004 21.6569 19C21.8837 19.6416 22 20.3179 22 21H19.9981Z" fill="#0A0620" />
                <path d="M16 21H14C14 18.2386 11.7614 16 9 16C6.23858 16 4 18.2386 4 21H2C2 17.134 5.13401 14 9 14C12.866 14 16 17.134 16 21Z" fill="#0A0620" />
              </svg>
            </div>
            <div>
              {props.designer}
            </div>
          </li>
          {props.firstList.map((el, index) => <List cl={classNames(styles.block, styles.listItem)} img={true} item={el} key={index} />)}
        </ul>
      </div>
      <div className={classNames(styles.flex40, styles.borderTop)}>
        <ul className={classNames(styles.padding24, styles.ui)}>
          <h3 className={styles.subTitle}>Предоставляемые услуги:</h3>
          {props.offer.map((el, index) => <List cl={styles.listItem} item={el} key={index} />)}
        </ul>
        <div className={styles.btnContainer}>
          <Btn text='хочу написать' a={true} href='https://pa-sales.bitrix24.site/' />
        </div>
      </div>
    </div>
  );
}
