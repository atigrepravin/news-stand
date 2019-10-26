import React from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import s from './search-bar.module.css';

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
    this.setState({
      queryValue: queryString.parse(this.props.location.search).q
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
      <div className={s.container}>
        <form onSubmit={this.submit}>
          <div className={s.searchWrapper}>
            <input
              className={s.input}
              type='search'
              name='query'
              value={this.state.queryValue}
              onChange={this.handleChange}
              placeholder='Search News'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBar);
