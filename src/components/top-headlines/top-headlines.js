import React from 'react';
import NewsBox from '../news-box/news-box'
import WithQuery from 'with-query';
import NewsApi from '../../server/newsapi';

class TopHeadlines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      isLoading: true
    }
  }

  componentDidMount() {
    NewsApi.topHeadlines({
      'country': 'in'
    }).then(response => {
      this.setState({ articles: response.articles })
    })
    .finally(() => this.setState({
      isLoading: false
    }));
  }

  render() {
    return <NewsBox heading="Top Headlines" articles={this.state.articles} isLoading={this.state.isLoading} />
  }
}

export default TopHeadlines;
