import React from 'react';
import classNames from '../className';
import styles from './image.css';

interface IImage {
  cl?: string;
  clImg?: string;
  src: string;
  alt: string;
}

export function Image({cl, src, alt, clImg}:IImage) {
  return (
    <div className={classNames(styles.img, cl)}>
      <img className={clImg} src={src} alt={alt} onContextMenu={() => {return false}} />
      <div className={styles.onImg}></div>
    </div>
  );
}
