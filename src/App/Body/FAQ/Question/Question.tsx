import React, { ReactElement, useEffect, useState } from 'react';
import classNames from '../../../../modules/className';
import { generateRandomString } from '../../../../modules/generateId';
import getCoords from '../../../../modules/getCoords';
import styles from './question.css';

interface IQuestion {
  question: string;
  answer: string;
  cl: string;
}


export function Question(this: any, { question, answer, cl }: IQuestion) {
  const id = generateRandomString();

  const [isShow, setShow] = useState(false);

  let answerClass = styles.answer;
  let btnClass;

  if (isShow) {
    answerClass = styles.answer;
    btnClass = classNames(styles.btn, styles.rotate);
  } else {
    answerClass = classNames(styles.answer, styles.hidden);
    btnClass = styles.btn;
  }

  return (
    <div className={classNames(styles.questionContainer, cl)}>
      <div className={styles.question} onClick={() => {  setShow(!isShow) }}>
        <h3 className={styles.title}>{question}</h3>
        <button className={btnClass}>
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div id={id} className={answerClass}>
        {answer}
      </div>
    </div>
  );
}
