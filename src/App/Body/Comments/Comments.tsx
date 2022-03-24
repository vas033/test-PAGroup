import React from 'react';
import comments from '../../arrays/comments';
import styles from './comments.css';
import { Comment } from './Comment'
import { Btn } from '../../../modules/Btn';
import { generateRandomString } from '../../../modules/generateId';

interface IMyProp {
  scrollPos?: number;
  windowHeight?: number;
}

const id0 = generateRandomString();
const id1 = generateRandomString();
const id2 = generateRandomString();

export function Comments({scrollPos, windowHeight}:IMyProp) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Отзывы</h2>
      <div className={styles.commentContainer}>
        <Comment src={comments[0].src} name={comments[0].name} link={comments[0].link} text={comments[0].text} scrollPos={scrollPos} windowHeight={windowHeight} id={id0} />
        <Comment cl={styles.comment} src={comments[1].src} name={comments[1].name} link={comments[1].link} text={comments[1].text} scrollPos={scrollPos} windowHeight={windowHeight} id={id1} />
        <Comment cl={styles.comment} src={comments[2].src} name={comments[2].name} link={comments[2].link} text={comments[2].text} scrollPos={scrollPos} windowHeight={windowHeight} id={id2} />
      </div>
      <div className={styles.btn}>
        <Btn text='посмотреть все отзывы' />
      </div>
    </section>
  );
}
