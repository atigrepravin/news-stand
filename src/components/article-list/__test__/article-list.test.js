import React from 'react';
import { create } from 'react-test-renderer';
import ArticleList from '..';
import { MOCK_ARTICLE_LIST } from '../../../mock-data';

test('<ArticleList/> should render 3 articles', () => {
  const component = create(
    <ArticleList articles={MOCK_ARTICLE_LIST} isLoading={false} />
  );

  expect(component.toJSON()).toMatchSnapshot();
});

test('<ArticleList isLoading={true}/> should not render any article', () => {
  const component = create(
    <ArticleList articles={MOCK_ARTICLE_LIST} isLoading={true} />
  );

  expect(component.toJSON()).toMatchSnapshot();
});
