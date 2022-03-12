import React, { ReactElement, useEffect, useState } from 'react';
import classNames from '../../../../modules/className';
import styles from './question.css';

interface IQuestion {
  question: string;
  answer: string;
  cl: string;
}

function getCoords(elem: Element) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
  };
}

export function Question({ question, answer, cl }: IQuestion) {
  const [isShow, setShow] = useState(false);

  let a;
  const div = document.querySelector(styles.questionContainer);
  div ? a = getCoords(div) : a= 'nth'
  console.log(a);
  console.log(div);

  let answerClass;
  let btnClass;

  if (isShow) {
    answerClass = styles.answer;
    btnClass = classNames(styles.btn, styles.rotate);
  } else {
    answerClass = classNames(styles.answer, styles.hidden);
    btnClass = styles.btn;
  };

  return (
    <div className={classNames(styles.questionContainer, cl)}>
      <div className={styles.question} onClick={() => setShow(!isShow)}>
        <h3 className={styles.title}>{question}</h3>
        <button className={btnClass}>
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className={answerClass}>{answer}</div>
    </div>
  );
}