import React from 'react';
import { TextDiv } from '../../../modules/TextDiv';
import styles from './sectionabout.css';

export function SectionAbout() {
  return (
    <div className={styles.section2}>
      <TextDiv
        title="40+"
        text="постоянных клиентов"
        cl={styles.section2Div}
        clTitle={styles.section2Title}
      />
      <TextDiv
        title="690+"
        text="выполненных работ"
        cl={styles.section2Div}
        clTitle={styles.section2Title}
      />
      <TextDiv
        title="16+"
        text="дизайнеров в штате"
        cl={styles.section2Div}
        clTitle={styles.section2Title}
      />
    </div>
  );
}
