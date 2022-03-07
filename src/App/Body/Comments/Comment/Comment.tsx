import React from 'react';
import classNames from '../../../../modules/className';
import styles from './comment.css';

interface IComment {
  src: string;
  name: string;
  link: string;
  text: string;
  cl: string;
}

export function Comment({src, name, link, text, cl}:IComment) {
  return (
    <div className={classNames(styles.commentContainer, cl)}>
      <div className={styles.flex}>
        <img src={src} alt="User photo" className={styles.photo}/>
        <div className={styles.column}>
          <div className={styles.name}>{name}</div>
          <a href={`http://${link}`}>{link}</a>
        </div>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
