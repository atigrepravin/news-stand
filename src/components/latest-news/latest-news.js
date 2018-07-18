import React from 'react';
import s from './latest-news.module.css';

const LatestNews = () => (
  <div className={s.container}>
    <div className={s.head}>
      <h4 className={s.headline}>Latest News</h4>
      <ul className={s.navlist}>
        <li className={s.listItem}>
          <a href="#" className={s.listLink}>All</a>
        </li>
        <li className={s.listItem}>
          <a href="#" className={s.listLink}>World</a>
        </li>
        <li className={s.listItem}>
          <a href="#" className={s.listLink}>Lifestyle</a>
        </li>
        <li className={s.listItem}>
          <a href="#" className={s.listLink}>Business</a>
        </li>
        <li className={s.listItem}>
          <a href="#" className={s.listLink}>Fashion</a>
        </li>
      </ul>
    </div>
    <div className={s.content}></div>
  </div>
)

export default LatestNews
