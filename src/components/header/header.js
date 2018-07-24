import React from 'react';
import { Link } from "react-router-dom";
import Search from './search/search';
import s from './header.module.css';

const Header = () => (
  <header className={s.header}>
    <div className={s.headerLeft}>
      <h2 className={s.logoWrapper}>
        <Link to="/" className={s.logo}>News Stand</Link>
      </h2>
    </div>
    <Search />
  </header>
)


export { Header };
