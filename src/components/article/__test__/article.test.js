import React from 'react';
import { render } from '@testing-library/react';
import Article from '..';
import { MOCK_ARTICLE } from '../../../mock-data';

test('<Article/> should render an article', () => {
  const { container } = render(
    <Article
      article={MOCK_ARTICLE}
      authorUrl={new URL(MOCK_ARTICLE.url).origin}
    />
  );
  expect(container).toMatchSnapshot();
});
