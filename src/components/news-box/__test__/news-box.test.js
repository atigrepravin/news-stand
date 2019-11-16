import React from 'react';
import { render } from 'rtl-custom-utils';
import '@testing-library/jest-dom/extend-expect';
import NewsBox from '../news-box';

test('it should render a story', () => {
  const { container, getByText } = render(
    <NewsBox
      heading='Top Headlines'
      articles={[
        {
          source: {
            id: 'the-times-of-india',
            name: 'The Times of India'
          },
          author: null,
          title:
            'Reliance Industries to restructure Jio, look for investors - Times of India',
          description:
            'India Business News: Mukesh Ambani’s RIL on Friday announced a restructuring of its digital and telecom business, including Jio, through a multi-step process as it readies',
          url:
            'http://timesofindia.indiatimes.com/business/india-business/ril-to-restructure-jio-look-for-investors/articleshow/71769767.cms',
          urlToImage:
            'https://static.toiimg.com/thumb/msid-71770829,width-1070,height-580,imgsize-162969,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg',
          publishedAt: '2019-10-25T23:55:40Z',
          content:
            'MUMBAI/BENGALURU: Mukesh Ambanis Reliance Industries Limited (RIL) on Friday announced a restructuring of its digital and telecom business, including Jio, through a multi-step process as it readies to raise external capital from both financial and strategic i… [+2446 chars]'
        }
      ]}
      isLoading={false}
    />
  );

  expect(getByText('Top Headlines')).toBeInTheDocument();
  expect(container.firstChild).toMatchSnapshot();
});
