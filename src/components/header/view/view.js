import React from 'react';
import s from './view.module.css';

const View = () => (
  <div className={s.container}>
    <ul className={s.list}>
      <li className={s.listItem}>
        <i className="icono-tiles"></i>
      </li>
      <li className={s.listItem}>
        <i className="icono-list"></i>
      </li>
    </ul>
  </div>
)


export default View;
