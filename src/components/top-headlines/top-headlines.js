import React from 'react';
import s from './top-headlines.module.css';

const RenderArticle = ({ article }) => {
  const authorUrl = `//${new URL(article.url).hostname}`;
  return(
    <article className={s.article}>
      <figure className={s.imageHolder} style={{backgroundImage: `url(${article.urlToImage})`}}>
        <a href="#" className={s.imgUrl}></a>
        <img src={article.urlToImage} alt={article.title} />
      </figure>
      <div className={s.content}>
        <h3 className={s.title}>{article.title}</h3>
        <div className={s.meta}>
          by <a href={authorUrl} target="_blank" className={s.author}>{article.author}</a>
          <span className={s.timestamp}>221</span>
        </div>
      </div>
    </article>
  )
}

const RenderArticles = ({articles, from ,to}) => {
  return(
    articles.slice(from, to).map((article, index) => <RenderArticle article={article} /> )

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
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=39545b21966344e38ae35fc16711d6e7')
      .then(res => res.json())
      .then(res => {
        console.log('res', res)
        this.setState( { articles: res.articles})
      });
  }

  render() {
    return(
      <div>
        <h2 className={s.heading}>Top Headlines</h2>
        <section className={s.articles}>
          <RenderArticles articles={this.state.articles} from={1} to={2} />
        </section>
        <section className={s.articles}>
          <RenderArticles articles={this.state.articles} from={2} to={5} />
        </section>
      </div>
    )
  }
}

export { TopHeadlines };
