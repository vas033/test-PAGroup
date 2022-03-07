import React from 'react';
import { Btn } from '../../../modules/Btn';
import { TextDiv } from '../../../modules/TextDiv';
import { SectionAbout } from '../SectionAbout';
import styles from './sectiontitle.css';

export function SectionTitle() {
  return (
    <section className={styles.section1}>
      <TextDiv
        cl={styles.mainBlockText}
        title="Креативная команда дизайнеров"
        text="Мы предлагаем услуги графического дизайна, UX/UI (web сервисов и моб приложений), создания анимаций и 3D объектов."
        tag="h1"
        clTitle={styles.title}
        clText={styles.text}
      />
      <div className={styles.bottomDiv}>
        <div>
          <Btn text="заказать дизайн" inverse={true} header={true} />
        </div>
        <div className={styles.sectionAbout}>
          <SectionAbout />
        </div>
      </div>
    </section>
  );
}
