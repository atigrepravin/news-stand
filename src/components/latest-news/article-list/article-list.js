import React from 'react';
import dateFns from 'date-fns';
import { truncate } from '../../utils';
import s from './article-list.module.css';

const Article = ({ article }) => {
  const authorUrl = `//${new URL(article.url).hostname}`;
  return(
    <article className={s.article}>
      <figure className={s.imageHolder}>
        <a target="_blank" href={article.url}>
          <img src={article.urlToImage} alt={article.title} />
        </a>
      </figure>
      <div className={s.content}>
        <h3 className={s.title}>
        <a target="_blank" href={article.url}>{article.title}</a>
        </h3>
        <div className={s.meta}>
          by <a href={authorUrl} target="_blank" className={s.author}>{article.source.name}</a>
          <span className={s.timestamp}>{dateFns.format(article.publishedAt, 'MMM DD, YYYY')}</span>
        </div>
        <div className={s.description}>{truncate(article.description, 90)}</div>
      </div>
    </article>
  )
}

const ArticleList = ({ articles }) => (
  <section className={s.articles}>
    {
      articles.slice(0, 4).map((article) => {
        return <Article article={article} />
      })
    }
  </section>
)

export default ArticleList;
