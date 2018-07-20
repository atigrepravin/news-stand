import React from 'react';
import s from './filter-pole.module.css';


const FilterPole = () => (
  <div className={s.container}>
    <div className={s.body}>
    <form>
      <input type="search" placeholder="Source" />
    </form>
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

export default FilterPole;
