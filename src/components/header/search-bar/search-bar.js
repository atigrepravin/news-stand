import React from 'react';
import { withRouter } from "react-router-dom";
import s from './search-bar.module.css';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      query: ''
    }
  }

  submit = (e) => {
    e.preventDefault();
    const value = e.target.elements.query.value;
    if(value) {
      let queryString = value;
      this.props.history.push(`/search?q=${value}`);
    }
  }

  render() {
    return(
      <div className={s.container}>
        <form onSubmit={this.submit.bind(this)}>
          <div className={s.searchWrapper}>
            <input className={s.input} type="search" name="query" placeholder="Search News"  />
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(SearchBar);
