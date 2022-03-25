import React, { useState } from 'react';
import styles from './commentspagecontainer.css';
import comments from '../../arrays/comments';
import { generateRandomString } from '../../../modules/generateId';
import { RouterLink } from '../../../modules/RouterLink';
import { Comment } from '../../Body/Comments/Comment';
import { Btn } from '../../../modules/Btn';
import { Link } from 'react-router-dom';

const moreCommentsArr = [...comments, ...comments, ...comments];

export function CommentsPageContainer() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Отзывы</h2>
      <Link to='/' className={styles.back} >Назад</Link>
      <div id='commentsPageContainer' className={styles.commentContainer}>
        {comments.map((el) =>
          <Comment key={el.name} src={el.src} name={el.name} link={el.link} text={el.text} />
        )};
        <div className={styles.hide}>
        {moreCommentsArr.map((el) =>
          <Comment key={generateRandomString()} src={el.src} name={el.name} link={el.link} text={el.text} />
        )}
        </div>
      </div>
      <div className={styles.btn}>
        <Btn 
        text='посмотреть все отзывы' 
        handler={() => { 
          document.querySelectorAll(`.${styles.hide}`).forEach(element => {
            element.classList.add(styles.show);
            element.classList.remove(styles.hide);
          });

          document.querySelectorAll(`.${styles.btn}`).forEach(element => {
            element.classList.remove(styles.show);
            element.classList.add(styles.hide);
          });
        }} />
      </div>
      <div className={styles.hide}>
        <Btn 
        text='скрыть все отзывы' 
        handler={() => { 
          
          document.querySelectorAll(`.${styles.show}`).forEach(element => {
            element.classList.add(styles.hide);
            element.classList.remove(styles.show);
          });

          document.querySelectorAll(`.${styles.btn}`).forEach(element => {
            element.classList.add(styles.show);
            element.classList.remove(styles.hide);
          });
        }} />
      </div>
    </section>
  );
}
