import React from 'react';
import NewsBox from '../../components/news-box/news-box'
import WithQuery from 'with-query';
import NewsApi from '../../server/newsapi';
const queryString = require('query-string');


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    const parsedString = queryString.parse(this.props.location.search);
    this.props.location

    NewsApi.everything({
      q: parsedString.q,
      sortBy: 'popularity'
    }).then(response => {
      this.setState({ articles: response.articles })
    });
  }

  render() {
    if(this.state.articles) return <NewsBox heading="Search Results" articles={this.state.articles} />
    return (
      <div>No results found.</div>
    )
  }
}

export default Search;
