import React from 'react';
import { render } from '@testing-library/react';
import ArticleList from '..';
import { MOCK_ARTICLE_LIST } from '../../../mock-data';

describe('<ArticleList/> : ', () => {
  test('It should render 3 articles', () => {
    const { container } = render(
      <ArticleList articles={MOCK_ARTICLE_LIST} isLoading={false} />
    );

    expect(container).toMatchSnapshot();
  });

  test('It should not render any article', () => {
    const { container } = render(
      <ArticleList articles={MOCK_ARTICLE_LIST} isLoading={true} />
    );

    expect(container).toMatchSnapshot();
  });
});
