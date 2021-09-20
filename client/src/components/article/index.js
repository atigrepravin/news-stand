import React from 'react';
import dateFormat from 'date-fns/format';
import { truncate } from '../utils';
import s from './article.module.css';

const Article = ({ article, authorUrl, viewAs }) => (
  <article className={`${s.article} ${s[viewAs]}`}>
    {article.urlToImage && (
      <figure className={s.imageHolder}>
        <a target='_blank' href={article.url}>
          <img src={article.urlToImage} alt={article.title} />
        </a>
      </figure>
    )}
    <div className={s.content}>
      <h3 className={s.title}>
        <a target='_blank' href={article.url}>
          {article.title}
        </a>
      </h3>
      {article.description && (
        <div className={s.description}>
          <a target='_blank' href={article.url}>
            {truncate(article.description, 200)}
          </a>
        </div>
      )}
      <div className={s.meta}>
        by{' '}
        <a href={authorUrl} target='_blank' className={s.author}>
          {article.source.name}
        </a>
        <span className={s.timestamp}>
          {dateFormat(article.publishedAt, 'MMM DD, YYYY')}
        </span>
      </div>
    </div>
  </article>
);

export default Article;
