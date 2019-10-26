import React from 'react';
import Article from '../article';
import s from './article-list.module.css';

const ArticleList = ({ articles, isLoading }) => {
  return (
    <div className={s.articles}>
      {isLoading && <div className={s.loader}>Loading...</div>}
      {!isLoading && !articles.length && <div>No results found.</div>}
      {articles.map((article, index) => {
        const authorUrl = `//${new URL(article.url).hostname}`;
        return (
          <Article
            article={article}
            authorUrl={authorUrl}
            key={`${article.source.name}-${index}`}
          />
        );
      })}
    </div>
  );
};

export default ArticleList;
