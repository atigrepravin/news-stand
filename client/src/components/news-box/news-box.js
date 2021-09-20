import React from 'react';
import ArticleList from '../article-list';
import s from './news-box.module.css';

const NewsBox = ({ heading, articles, isLoading }) => (
  <React.Fragment>
    {heading && <h2 className={s.heading}>{heading}</h2>}
    <ArticleList articles={articles} isLoading={isLoading} />
  </React.Fragment>
);

export default NewsBox;
