import React from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import SearchBarInput from './search-bar-input';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      queryValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    const urlQuery = queryString.parse(this.props.location.search).q;
    urlQuery &&
      this.setState({
        queryValue: urlQuery
      });
  }

  submit = e => {
    e.preventDefault();
    if (this.state.queryValue) {
      this.props.history.push(`/search?q=${this.state.queryValue}`);
    }
  };

  handleChange(e) {
    this.setState({
      queryValue: e.target.value
    });
  }

  render() {
    return (
      <SearchBarInput
        submit={this.submit}
        handleChange={this.handleChange}
        queryValue={this.state.queryValue}
      />
    );
  }
}

export default withRouter(SearchBar);
