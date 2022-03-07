import React from 'react';
import styles from './image.css';

interface IImage {
  cl?: string;
  src: string;
  alt: string;
}

export function Image({cl, src, alt}:IImage) {
  return (
    <img className={cl} src={src} alt={alt} />
  );
}
