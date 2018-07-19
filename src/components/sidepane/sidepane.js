import React from 'react';
import s from './sidepane.module.css';


const Sidepane = () => (
  <div className={s.container}>
    <div className={s.body}>
    <ul className={s.menuList}>
      <li className={s.listItem}>
        <a href="#">Top Headlines</a>
      </li>
      <li className={s.listItem}>
        <a href="#">India</a>
      </li>
      <li className={s.listItem}>
        <a href="#">Buisness</a>
      </li>
      <li className={s.listItem}>
        <a href="#">Technology</a>
      </li>
      <li className={s.listItem}>
        <a href="#">Entertainment</a>
      </li>
    </ul>
    </div>
  </div>
)

export default Sidepane;
