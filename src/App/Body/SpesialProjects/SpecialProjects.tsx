import React from 'react';
import classNames from '../../../modules/className';
import { TextDiv } from '../../../modules/TextDiv';
import styles from './specialprojects.css';
import designerImg from '../../../img/specProject/designer.png';
import fixPriceImg from '../../../img/specProject/fixPrice.png';
import infinityImg from '../../../img/specProject/infinity.png';
import topSpecImg from '../../../img/specProject/topSpec.png';

export function SpecialProjects() {
  const classes = styles.textCenter + ' ' + styles.paddingSides69 + ' ' + styles.marginBottom50 + ' ' + styles.flex;

  return (
    <section className={classNames(styles.sectionPadding, styles.sectionSpec)}>
      <div className={styles.flex1920}>
        <h2 className={classNames(styles.sectionTitle, styles.textCenter, styles.marginBottom50)}>
          <span>Дизайнер </span>
          <span className={styles.bold}>по подписке</span>
        </h2>
        <TextDiv
          text='Это как, дизайнер в штате, но лучше. 
            Мы будем с вами на связи 40 часов в неделю и оперативно выполнять ваши задачи, как будто мы у вас в штате.'
          cl={classNames(styles.marginBottom50, styles.textCenter, styles.text)}
        />
      </div>
      <div className={styles.sectionSpecContent}>
        <TextDiv
          cl={classes}
          img={true}
          clImg={styles.marginBottom30}
          src={designerImg}
          alt='designer'
          text='Топовый дизайнер по цене фрилансера'
        />
        <TextDiv
          cl={classes}
          img={true}
          clImg={styles.marginBottom30}
          src={topSpecImg}
          alt='specialists'
          text='Только проверенные специалисты'
        />
        <TextDiv
          cl={classes}
          img={true}
          clImg={styles.marginBottom30}
          src={fixPriceImg}
          alt='fixed price'
          text='Фиксированная цена и никаких доплат'
        />
        <TextDiv
          cl={classes}
          img={true}
          clImg={styles.marginBottom30}
          src={infinityImg}
          alt='infinity'
          text='Безлимитные правки'
        />
      </div>
    </section>
  );
}
