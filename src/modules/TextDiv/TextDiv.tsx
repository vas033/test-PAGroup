import React from 'react';
import classNames from '../className';
import styles from './textdiv.css';
import { Image } from '../Image/Image'

interface ITextDiv {
  title?: string;
  titleBold?: string;
  text: string;
  tag?: string;
  cl?: string;
  clTitle?: string;
  clSubTitle?: string;
  clText?: string;
  img?: boolean;
  alt?: string;
  src?: string;
  clImg?: string;
}

export function TextDiv({ title, titleBold, text, tag, cl, clTitle, clText, img, src, alt, clImg, clSubTitle }: ITextDiv) {
  if (tag === 'h1') {
    return (
      <div className={classNames(styles.textContainer, cl)}>
        <h1 className={classNames(styles.mainTitle, clTitle)}>{title}</h1>
        <p className={classNames(styles.text, clText)}>{text}</p>
      </div>
    );
  } else if(img) {
    return (
      <div className={classNames(styles.textContainer, cl)}>
          <img src={src} alt={alt} className={clImg} /> 
        <p className={classNames(styles.text, clText)}>{text}</p>
      </div>
    );
  } else if (titleBold !== undefined) {
    return (
      <div className={classNames(styles.textContainer, cl)}>
        <h2 className={classNames(styles.title, clTitle)}>
          {title}<strong className={ clSubTitle}>{titleBold}</strong></h2>
        <p className={classNames(styles.text, clText)}>{text}</p>
      </div>
    )
  } else {
    return (
      <div className={classNames(styles.textContainer, cl)}>
        <h2 className={classNames(styles.title, clTitle)}>{title}</h2>
        <p className={classNames(styles.text, clText)}>{text}</p>
      </div>
    )
  }
}
