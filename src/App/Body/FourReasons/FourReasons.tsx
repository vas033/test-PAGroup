import React from 'react';
import { Btn } from '../../../modules/Btn';
import classNames from '../../../modules/className';
import { TextDiv } from '../../../modules/TextDiv';
import styles from './fourreasons.css';

const classes = styles.marginBottom30 + ' ' + styles.italic + ' ' + styles.subTitle


export function FourReasons() {
  return (
    <section className={styles.sectionPadding}>
      <h2 className={classNames(styles.sectionTitle, styles.marginBottom50)}>Четыре причины выбрать нас</h2>
      <div className={styles.flexList}>
        <TextDiv
          title='Мы следим за трендами'
          text='Мы следим за трендами на зарубежном рынке и одними из первых используем в своих проектах.'
          cl={classNames(styles.marginBottom50, styles.flexItem)}
          clTitle={classNames(styles.subTitleBeige, classes)}
          clText={classNames(styles.paddingLeft24, styles.text)}
        />
        <TextDiv
          title='Мы - профессионалы'
          text='Дизайнеры с опытом работы в сфере, которые решают задачи любой сложности.'
          cl={classNames(styles.marginBottom50, styles.flexItem)}
          clTitle={classNames(styles.subTitleGreenGrey, classes)}
          clText={classNames(styles.paddingLeft24, styles.text)}
        />
        <TextDiv
          title='Мы работаем с людьми '
          text='Мы строим доверительные, долговременные отношения с клиентами. Гарантируем крутой и качественный дизайн, а если вам не понравится результат - вернем деньги.'
          cl={classNames(styles.marginBottom50, styles.flexItem)}
          clTitle={classNames(styles.subTitleGrey, classes)}
          clText={classNames(styles.paddingLeft24, styles.text)}
        />
        <TextDiv
          title='Мы постоянно развиваемся '
          text='Мы активно обучаем наших дизайнеров и постоянно приглашаем лучших дизайнеров из ведущих компаний для проведения мастер-классов, чтобы наши специалисты перенимали их опыт, а вы получали лучший результат.'
          cl={classNames(styles.marginBottom50, styles.flexItem)}
          clTitle={classNames(styles.subTitleGreyTwo, classes)}
          clText={classNames(styles.paddingLeft24, styles.text)}
        />
      </div>
      <div className={styles.btn}>
        <Btn a={true} href='#' text='наш telegram канал о дизайне' />
      </div>
    </section>
  );
}
