import React from 'react';
import { render, fireEvent } from 'rtl-custom-utils';
import '@testing-library/jest-dom/extend-expect';
import SearchBar from '../search-bar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

describe('<SearchBar/> : ', () => {
  test('It should render searchbar markup', () => {
    const { container } = render(
      <Router>
        <SearchBar />
      </Router>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('It should enter a test query and submit the form', () => {
    const { getByPlaceholderText } = render(
      <Router>
        <SearchBar />
      </Router>
    );
    const query = 'test query';
    const inputNode = getByPlaceholderText('Search News');
    inputNode.value = query;
    fireEvent.keyPress(inputNode, { key: 'Enter', code: 13 });
    expect(inputNode).toHaveValue(query);
  });
});
