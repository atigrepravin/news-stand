import React from 'react';
import NewsBox from '../news-box/news-box'
import WithQuery from 'with-query';
import NewsApi from '../../server/newsapi';

class TopHeadlines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      isLoading: true,
      totalResults: 0,
      params: {
        country: "in",
        pageSize: 40
      }
    };
    this.filterBycategory = this.filterBycategory.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData(params) {
    const query = params || this.state.params;
    NewsApi.topHeadlines(query)
      .then(response => {
        this.setState({
          articles: response.articles,
          totalResults: response.totalResults
        });
      })
      .catch(error => console.error("error: ", error))
      .finally(() =>
        this.setState({
          isLoading: false
        })
      );
  }

  filterBycategory(category) {
    this.setState(
      {
        params: Object.assign({}, this.state.params, {
          category: category
        })
      },
      () => this.fetchData()
    );
    
  }

  render() {
    return (
      <div>
        <button onClick={() => this.filterBycategory("business")}>
          Business
        </button>{" "}
        &nbsp;
        <button onClick={() => this.filterBycategory("entertainment")}>
          Entertainment
        </button>{" "}
        &nbsp;
        <button onClick={() => this.filterBycategory("technology")}>
          Technology
        </button>{" "}
        &nbsp;
        <button onClick={() => this.filterBycategory("sports")}>
          Sports
        </button>{" "}
        &nbsp;
        <button onClick={() => this.filterBycategory("health")}>
          Health
        </button>{" "}
        Total results: {this.state.totalResults}
        <p>&nbsp;</p>
        <NewsBox
          heading="Top Headlines"
          articles={this.state.articles}
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }
}

export default TopHeadlines;
