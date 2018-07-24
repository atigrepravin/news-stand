import React from 'react';
import SourceFilter from './source-filter/source-filter';
import s from './filter-pole.module.css';

const FilterPole = () => (
  <div className={s.container}>
    <div className={s.body}>
      <SourceFilter />
    </div>
  </div>
)

export default FilterPole;
