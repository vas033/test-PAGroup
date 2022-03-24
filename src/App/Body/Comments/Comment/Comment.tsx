import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import classNames from '../../../../modules/className';
import getCoords from '../../../../modules/getCoords';
import styles from './comment.css';

interface IComment {
  src: string;
  name: string;
  link: string;
  text: string;
  cl?: string;
  scrollPos?: number;
  windowHeight?: number;
  id?: string
}

export function Comment({ src, name, link, text, cl, scrollPos, windowHeight, id }: IComment) {
  if (id) {
    const comment = document.getElementById(id);
    if (comment && scrollPos && windowHeight) {
      const commentTop = getCoords(comment).top;
      comment.style.transform = 'translateY(50%)';

      if (scrollPos + windowHeight > commentTop) {
        comment.style.transform = 'translateY(0%)';
      }
    }
  }

  return (
    // <ScrollAnimation animateIn='bounceInRight' duration={2} animateOnce={true} >
    <div id={id} className={classNames(styles.commentContainer, cl)}>
      <div className={styles.flex}>
        <img src={src} alt="User photo" className={styles.photo} />
        <div className={styles.column}>
          <div className={styles.name}>{name}</div>
          <a className={styles.link} href={`http://${link}`}>{link}</a>
        </div>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
    // </ScrollAnimation>
  );
}
