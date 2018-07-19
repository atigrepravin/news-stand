import React from 'react';
import TopHeadlines from '../../components/top-headlines/top-headlines';
import LatestNews from '../../components/latest-news/latest-news';
import PopulrPosts from '../../components/popular-posts/popular-posts';
import s from './home.module.css';

const Home = () => (
  <div className={s.container}>
    <div class="sidepane"></div>
    <div>
      <TopHeadlines />
      {/*
        <div className={s.LatestNews__popularPost}>
        <div>
          <LatestNews />
        </div>
        <div>
          <PopulrPosts />
        </div>
      </div>
    */}
    </div>
    <div class="sidebar"></div>
  </div>
)

export { Home };
