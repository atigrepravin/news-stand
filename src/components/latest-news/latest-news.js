import React from 'react';
import Head from './head/head';
import ArticleList from './article-list/article-list';
import s from './latest-news.module.css';


class LatestNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=39545b21966344e38ae35fc16711d6e7')
      .then(res => res.json())
      .then(res => {
        console.log('res', res)
        this.setState( { articles: res.articles})
      });
  }

  render() {
    return(
      <div className={s.container}>
        <Head />
        <div className={s.content}>
          <ArticleList articles={this.state.articles} />
        </div>
      </div>
    )
  }
}


export default LatestNews;
