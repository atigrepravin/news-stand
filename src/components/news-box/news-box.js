import React from 'react';
import dateFns from 'date-fns';
import { truncate } from '../utils';
import s from './news-box.module.css';

const Articles = ({ articles }) => {
  return(
    articles.map(article => {
      const authorUrl = `//${new URL(article.url).hostname}`;
      return(
        <article className={s.article}>
          {/*
            {article.urlToImage && (
              <figure className={s.imageHolder}>
                <a target="_blank" href={article.url} className={s.imgUrl}></a>
                <img src={article.urlToImage} />
              </figure>
            )}
          */}
          <div className={s.content}>
            <h3 className={s.title}>
              <a target="_blank" href={article.url}>{article.title}</a>
            </h3>
            {article.description && (
              <div className={s.description}>
              <a target="_blank" href={article.url}>{truncate(article.description, 200)}</a></div>
            )}
            <div className={s.meta}>
              by <a href={authorUrl} target="_blank" className={s.author}>{article.source.name}</a>
              <span className={s.timestamp}>{dateFns.format(article.publishedAt, 'MMM DD, YYYY')}</span>
            </div>
          </div>
        </article>
      )
    })
  )
}

const NewsBox = ({ heading, articles }) => (
  <section className={s.container}>
    <h2 className={s.heading}>{heading}</h2>
    <div className={s.articles}>
      <Articles articles={articles} />
    </div>
  </section>
)

export default NewsBox;
