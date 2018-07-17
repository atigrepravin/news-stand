import React from 'react';
import { TopHeadlines } from '../../components/top-headlines/top-headlines';
import s from './home.module.css';

const Home = () => (
  <div className={s.container}>
    <div className={s.module}>
      <TopHeadlines />
    </div>
  </div>
)

export { Home };
