import { TimeLike } from 'fs';
import React, { useState } from 'react';
import { TextDiv } from '../../../modules/TextDiv';
import styles from './sectionabout.css';

export function SectionAbout() {
  let time: ReturnType<typeof setTimeout>; 
  const [clients, setClients] = useState(0);
  const [works, setWorks] = useState(0);
  const [designers, setDesigners] = useState(0);

  async function inputTime (numFinish:number, number:number, fn: React.Dispatch<React.SetStateAction<number>>) {
    number === numFinish ? clearTimeout(time) : time = setTimeout(() => animNumber( numFinish, number, fn), 300);   
  };

  const animNumber = (num:number, number: number, fn: React.Dispatch<React.SetStateAction<number>>) => {
    const step = Math.floor(num / 10);
    number + step > num ? fn(num) : fn(number + step);
  } 

  inputTime(40, clients, setClients);
  inputTime(690, works, setWorks);
  inputTime(16, designers, setDesigners);

  return (
    <div className={styles.section2}>
      <TextDiv
        title={clients + '+'}
        text="постоянных клиентов"
        cl={styles.section2Div}
        clTitle={styles.section2Title}
      />
      <TextDiv
        title={works + '+'}
        text="выполненных работ"
        cl={styles.section2Div}
        clTitle={styles.section2Title}
      />
      <TextDiv
        title={designers + '+'}
        text="дизайнеров в штате"
        cl={styles.section2Div}
        clTitle={styles.section2Title}
      />
    </div>
  );
}
