import React from 'react';
import ReactDom from 'react-dom';
import styles from './layout.css';

interface ILayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  return (
          <div>
                  {children}
          </div>
  )
}

