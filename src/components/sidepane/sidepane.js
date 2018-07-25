import React from 'react';
import { NavLink } from "react-router-dom";
import s from './sidepane.module.css';


const Sidepane = () => (
  <div className={s.container}>
    <div className={s.body}>
    <ul className={s.menuList}>
      <li className={s.listItem}>
        <NavLink className={s.listLink} exact activeClassName={s.active} to="/">Top Headlines</NavLink>
      </li>
      <li className={s.listItem}>
        <NavLink className={s.listLink} activeClassName={s.active} to="/about">About</NavLink>
      </li>
      <li className={s.listItem}>
        <NavLink className={s.listLink} activeClassName={s.active}  to="/contact">Contact</NavLink>
      </li>
      <li className={s.listItem}>
        <NavLink className={s.listLink} activeClassName={s.active} to={{ pathname: '/search', search: 'q=adf ad smodi in america'}}>Search</NavLink>
      </li>
      <li className={s.listItem}>
        <a href="#">Entertainment</a>
      </li>
    </ul>
    </div>
  </div>
)

export default Sidepane;
