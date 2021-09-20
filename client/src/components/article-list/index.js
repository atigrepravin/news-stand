import React from "react";
import { connect } from "react-redux";
import Article from "../article";
import s from "./article-list.module.css";

const ArticleList = ({ articles = [], isLoading, viewAs }) => {
  const viewClass = s[viewAs] || "";
  return (
    <section className={`${s.articles} ${viewClass}`}>
      {isLoading && <div className={s.loader}>Loading...</div>}
      {!isLoading && !articles.length && <div>No results found.</div>}
      {articles.map((article, index) => {
        const authorUrl = `//${new URL(article.url).hostname}`;
        return (
          <Article
            article={article}
            authorUrl={authorUrl}
            key={`${article.source.name}-${index}`}
            viewAs={viewAs}
          />
        );
      })}
    </section>
  );
};

const mapStateToProps = (state) => ({
  viewAs: state.viewAs,
});

export default connect(mapStateToProps)(ArticleList);
