import React from 'react';
import styles from './body.css';

interface IBody {
  children?: React.ReactNode;
}

export function Body({children}:IBody) {
  return (
    <main>
      {children}
    </main>
  );
}
