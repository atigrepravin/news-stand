import React from 'react';
import { Link } from "react-router-dom";
import s from './navbar.module.css';

const Navbar = () => (
  <div className={s.navbar}>
    <div className={s.container}>
      <div className={s.navbarLeft}>
        <h2 className={s.logoWrapper}>
          <Link to="/" className={s.logo}>News Stand</Link>
        </h2>
        {/*<nav className={s.menu}>
          <ul className={s.menuList}>
            <li className={s.listItem}>
              <Link className={s.listLink} to="/">Home</Link>
            </li>
            <li className={s.listItem}>
              <Link className={s.listLink} to="/about">About</Link>
            </li>
            <li className={s.listItem}>
              <Link className={s.listLink} to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>*/}
      </div>
      <div className={s.navbarRight}></div>
    </div>
  </div>
)

export default Navbar;
