import WithQuery from 'with-query';

const topHeadlines = params =>
  fetch(
    WithQuery('api/v1/top-headlines', {
      ...params,
      pageSize: 100
    })
  ).then(response => response.json());

const  everything = params =>
  fetch(
    WithQuery('api/v1/everything', {
      ...params,
      pageSize: 100
    })
  ).then(response => response.json());

  
const NewsApi = {
  topHeadlines,
  everything
}

export default NewsApi;
