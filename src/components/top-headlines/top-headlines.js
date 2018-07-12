import React from 'react';
import s from './top-headlines.module.css';

const RenderGrid = ({articles}) => {
  return(
    articles.map((item, index) => (
      <article key={`article-${index}`} className={s.gridItem}>
        <div className={s.imageHolder}>
          <figure>
            <a href="#" className={s.imgUrl}></a>
            <img src="" alt="" />
          </figure>
        </div>
        <h3>{item.title}</h3>
        <img src={item.urlToImage} alt={item.title} />
      </article>
    ))

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
        <section className={s.wrapper}>
          <RenderGrid articles={this.state.articles} />
        </section>
      </div>
    )
  }
}

export { TopHeadlines };
