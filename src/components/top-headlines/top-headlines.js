import React from 'react';
import dateFns from 'date-fns';
import TopArticle from './top-article/top-article'
import s from './top-headlines.module.css';

const RenderArticle = ({ article }) => {
  const authorUrl = `//${new URL(article.url).hostname}`;
  return(
    <article className={s.article}>
      <figure className={s.imageHolder} style={{backgroundImage: `url(${article.urlToImage})`}}>
        <a target="_blank" href={article.url} className={s.imgUrl}></a>
        <img src={article.urlToImage} alt={article.title} />
      </figure>
      <div className={s.content}>
        <h3 className={s.title}>
        <a target="_blank" href={article.url}>{article.title}</a>
        </h3>
        <div className={s.meta}>
          by <a href={authorUrl} target="_blank" className={s.author}>{article.source.name}</a>
          <span className={s.timestamp}>{dateFns.format(article.publishedAt, 'MMM DD, YYYY')}</span>
        </div>
      </div>
    </article>
  )
}

const RenderArticles = ({articles, from ,to, type}) => {
  return(
    articles.slice(from, to).map((article, index) => {
      if(type === 'top') {
        return <TopArticle article={article} />
      }
      return <RenderArticle article={article} />
    })

  )
}

class TopHeadlines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=39545b21966344e38ae35fc16711d6e7')
      .then(res => res.json())
      .then(res => {
        console.log('res', res)
        this.setState( { articles: res.articles})
      });
  }

  render() {
    return(
      <div className={s.container}>
        <section className={s.articles}>
          <RenderArticles articles={this.state.articles} from={2} to={5} />
        </section>
          <section className={s.topArticle}>
            <RenderArticles type="top" articles={this.state.articles} from={1} to={2} />
          </section>
      </div>
    )
  }
}

export { TopHeadlines };
