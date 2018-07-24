import WithQuery from 'with-query';

const NewsApi = {
  key: '39545b21966344e38ae35fc16711d6e7'
}

NewsApi.topHeadlines = (params) => (
  fetch(WithQuery('https://newsapi.org/v2/top-headlines', {...params, 'apiKey': NewsApi.key}))
  .then(response => response.json())
)

NewsApi.everything = (params) => (
  fetch(WithQuery('https://newsapi.org/v2/everything', {...params, 'apiKey': NewsApi.key}))
  .then(response => response.json())
)

NewsApi.sources = (params) => (
  fetch(WithQuery('https://newsapi.org/v2/sources', {...params, 'apiKey': NewsApi.key}))
  .then(response => response.json())
)

export default NewsApi;
