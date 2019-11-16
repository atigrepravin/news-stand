import React from 'react';
import queryString from 'query-string';
import NewsBox from '../../components/news-box/news-box';
import NewsApi from '../../server/newsapi';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      isLoading: true
    };
  }

  fetchArticles = query => {
    NewsApi.topHeadlines({
      q: query,
      sortBy: 'relevancy',
      country: 'in'
    }).then(headelinesResponse => {
      NewsApi.everything({
        q: query,
        sortBy: 'relevancy'
      })
        .then(everythingResponse => {
          this.setState({
            articles: headelinesResponse.articles.concat(
              everythingResponse.articles
            )
          });
        })
        .finally(() =>
          this.setState({
            isLoading: false
          })
        );
    });
  };

  componentDidMount() {
    let parsedString = queryString.parse(this.props.location.search).q;
    this.fetchArticles(parsedString);
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.location.search !== nextProps.location.search) {
      let parsedString = queryString.parse(nextProps.location.search).q;
      this.fetchArticles(parsedString);
    }
    return true;
  }

  render() {
    return (
      <NewsBox
        articles={this.state.articles}
        isLoading={this.state.isLoading}
      />
    );
  }
}

export default Search;
