import React from 'react';
import s from './search-bar-input.module.css';

export default ({ submit, queryValue, handleChange }) => (
  <div className={s.container}>
    <form onSubmit={submit}>
      <div className={s.searchWrapper}>
        <input
          className={s.input}
          type='search'
          name='query'
          value={queryValue}
          onChange={handleChange}
          placeholder='Search News'
        />
      </div>
    </form>
  </div>
);
