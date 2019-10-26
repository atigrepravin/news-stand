import React from 'react';
import { create } from 'react-test-renderer';
import Article from '..';
import { MOCK_ARTICLE } from '../../../mock-data';

test('<Article/> should render an article', () => {
  const component = create(
    <Article
      article={MOCK_ARTICLE}
      authorUrl={new URL(MOCK_ARTICLE.url).origin}
    />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
