import React from 'react';
import classNames from '../className';
import styles from './list.css';

interface IMyList {
  img?: boolean;
  item: string;
  cl?: string;
  clLi?: string;
}

export function List({ img = false, item, cl, clLi }: IMyList) {
  let listItem;

  if (img) {
    listItem = (<div className={styles.li}>
      <div className={styles.image}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.9995 22.5H12.0001C17.7715 22.4988 22.4601 17.8399 22.4978 12.0686C22.5355 6.29733 17.9082 1.5775 12.1373 1.50093C6.36642 1.42435 1.61553 6.01976 1.5001 11.79L1.5 11.79V11.8L1.5 12L1.5 12.0006C1.50637 17.7966 6.2034 22.4936 11.9995 22.5Z" fill="#0A0620" stroke="white" />
          <path fillRule="evenodd" clipRule="evenodd" d="M7.41 11.59L6 13L10 17L18 9.00002L16.59 7.58002L10 14.17L7.41 11.59Z" fill="white" />
        </svg>
      </div>
      <p>{item}</p>
    </div>)
  } else {
      clLi !== undefined ? listItem = <p className={clLi}>{item}</p>  : listItem = <p className={styles.li}>{item}</p> ;
  }


  return (
    <li className={cl}>
      {listItem}
    </li>
  );
}
