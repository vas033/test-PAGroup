import React, { ReactElement, useEffect, useState } from 'react';
import classNames from '../../../../modules/className';
import { generateRandomString } from '../../../../modules/generateId';
import styles from './question.css';

interface IQuestion {
  question: string;
  answer: string;
  cl: string;
}

const fullHeight = 100;
let height = 0;


export function Question(this: any, { question, answer, cl }: IQuestion) {
  const id = generateRandomString();

  const [isShow, setShow] = useState(false);
  const [div, setDiv] = useState(document.getElementById(id))
  let answerClass = styles.answer;
  let btnClass;

  if (isShow) {
    answerClass = styles.answer;
    btnClass = classNames(styles.btn, styles.rotate);
  } else {
    answerClass = classNames(styles.answer, styles.hidden);
    btnClass = styles.btn;
  }

  if (div) {
    const fullHeight = div.scrollHeight;
    let height = 0;
    const delay = 200;
    const step = fullHeight / delay;

    if (isShow) {
      height < fullHeight ? div.style.height = `${height}px` : div.style.height = `${fullHeight}px`;
      height = height + step
    } else {
      height > 0 ? div.style.height = `${height}px` : div.style.height = `0px`;
      height = height - step;
    }
  }

  return (
    <div className={classNames(styles.questionContainer, cl)}>
      <div className={styles.question} onClick={()=> {setDiv(document.getElementById(id)); setShow(!isShow)}}>
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
