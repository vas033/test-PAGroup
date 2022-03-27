import { TimeLike } from 'fs';
import React, { useState } from 'react';
import { TextDiv } from '../../../modules/TextDiv';
import styles from './sectionabout.css';

export function SectionAbout() {
  let time: ReturnType<typeof setTimeout>; 
  const [clients, setClients] = useState(0);
  const [works, setWorks] = useState(0);
  const [designers, setDesigners] = useState(0);

  const animTime = 2000;

  async function inputTime ( constName:any, numFinish:number, number:number, fn: React.Dispatch<React.SetStateAction<number>>, ms:number) {
    number === numFinish ? clearTimeout(constName) : constName = setTimeout(() => animNumber( numFinish, number, fn), ms);   
  };

  const animNumber = (num:number, number: number, fn: React.Dispatch<React.SetStateAction<number>>) => {
    number > num ? fn(num) : fn(++number);
  } 

  let clientsTime;
  let worksTime;
  let designersTime;

  inputTime(clientsTime, 40, clients, setClients, animTime/40);
  inputTime(worksTime, 690, works, setWorks, animTime/690);
  inputTime(designersTime, 16, designers, setDesigners, animTime/16);

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
