import React from 'react';
import { Btn } from '../../../modules/Btn';
import questions from '../../arrays/questions';
import styles from './faq.css';
import { Question } from './Question';

export function FAQ() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Остались вопросы?</h2>
      <div className={styles.flex}>
        {questions.map(el => <Question key={questions.indexOf(el)} question={el.question} answer={el.answer} cl={styles.question} />)}
      </div>
    </section>
  );
}
