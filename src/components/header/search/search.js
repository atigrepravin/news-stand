import React from 'react';
import { Redirect } from "react-router-dom";
import s from './search.module.css';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      query: ''
    }
  }

  submit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.query.value);
    const value = e.target.elements.query.value;
    if(value) {
      this.setState({
        redirect: true,
        query: value
      })
    }
  }

  render() {
    console.log('saf', this.props)
    const { redirect, query } = this.state;
    const redirectTo = {
      pathname: '/search',
      search: `q=${query}`
    }


    return(
      <div className={s.container}>
        <form onSubmit={this.submit.bind(this)}>
          <input type="search" name="query" placeholder="Search News"  />
        </form>
        {redirect && <Redirect to={redirectTo} />}
      </div>
    )
  }
}

export default Search;
