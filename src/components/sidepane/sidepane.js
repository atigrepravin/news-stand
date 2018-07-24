import React from 'react';
import { Link } from "react-router-dom";
import s from './sidepane.module.css';


const Sidepane = () => (
  <div className={s.container}>
    <div className={s.body}>
    <ul className={s.menuList}>
      <li className={s.listItem}>
        <Link className={s.listLink} to="/">Top Headlines</Link>
      </li>
      <li className={s.listItem}>
        <Link className={s.listLink} to="/about">Buisness</Link>
      </li>
      <li className={s.listItem}>
        <Link className={s.listLink} to="/contact">Technology</Link>
      </li>
      <li className={s.listItem}>
        <Link className={s.listLink} to={{ pathname: '/search', search: 'q=adf ad smodi in america'}}>Search</Link>
      </li>
      <li className={s.listItem}>
        <a href="#">Entertainment</a>
      </li>
    </ul>
    </div>
  </div>
)

export default Sidepane;
