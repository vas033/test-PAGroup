import React from 'react';
import comments from '../../arrays/comments';
import styles from './comments.css';
import { Comment } from './Comment'
import { Btn } from '../../../modules/Btn';

export function Comments() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Отзывы</h2>
      <div>
        {comments.map(el => <Comment cl={styles.comment} src={el.src} name={el.name} link={el.link} text={el.text} key={comments.indexOf(el)}/>)}
      </div>
      <Btn text='посмотреть все отзывы' />
    </section>
  );
}
