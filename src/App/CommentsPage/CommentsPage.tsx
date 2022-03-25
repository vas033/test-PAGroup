import React from 'react';
import { Header } from '../Header';
import { Layout } from '../Layout';
import styles from './commentspage.css';
import { scroll } from '../../hooks/scroll';
import { CommentsPageContainer } from './CommentsPageContainer';

export function CommentsPage() {
  return (
    <Layout>
      <Header />
      <CommentsPageContainer />
    </Layout>
  );
}
