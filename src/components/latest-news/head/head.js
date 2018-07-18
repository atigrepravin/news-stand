import React from 'react';
import s from './head.module.css';

const Head = () => (
  <div className={s.head}>
    <h4 className={s.headline}>Latest News</h4>
    <ul className={s.navlist}>
      <li className={s.listItem}>
        <a href="#" className={s.listLink}>Business</a>
      </li>
      <li className={s.listItem}>
        <a href="#" className={s.listLink}>Politics</a>
      </li>
      <li className={s.listItem}>
        <a href="#" className={s.listLink}>Technology</a>
      </li>
      <li className={s.listItem}>
        <a href="#" className={s.listLink}>Sports</a>
      </li>
      <li className={s.listItem}>
        <a href="#" className={s.listLink}>Lifestyle</a>
      </li>
      <li className={s.listItem}>
        <a href="#" className={s.listLink}>Fashion</a>
      </li>
    </ul>
  </div>
)

export default Head;
