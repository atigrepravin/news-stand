import React from 'react';
import { Link } from "react-router-dom";
import SearchBar from './search-bar/search-bar';
import View from './view/view';
import s from './header.module.css';

const Header = () => (
  <header className={s.header}>
    <h2 className={s.logoWrapper}>
      <Link to="/" className={s.logo}>News Stand</Link>
    </h2>
    <SearchBar />
    <View />
  </header>
)


export { Header };
