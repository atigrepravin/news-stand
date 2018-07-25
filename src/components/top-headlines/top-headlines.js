import React from 'react';
import NewsBox from '../news-box/news-box'
import WithQuery from 'with-query';
import NewsApi from '../../server/newsapi';

class TopHeadlines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    NewsApi.topHeadlines({
      'country': 'in'
    }).then(response => {
      this.setState({ articles: response.articles })
    });
  }

  render() {
    return <NewsBox heading="Top Headlines" articles={this.state.articles} />
  }
}

export default TopHeadlines;
