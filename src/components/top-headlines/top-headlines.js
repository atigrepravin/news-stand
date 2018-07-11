import React from 'react';
import './top-headlines.css';

const RenderGrid = ({articles}) => {
  return(
    articles.map(item => (
      <div class="wrapper-grid-item">
        <div>{item.title}</div>
        <img src={item.urlToImage} alt={item.title} />
      </div>
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
        <h2 class="heading">Top Headlines</h2>
        <div class="wrapper">
          <RenderGrid articles={this.state.articles} />
        </div>
      </div>
    )
  }
}

export { TopHeadlines };
