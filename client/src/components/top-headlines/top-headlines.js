import React from "react";
import NewsBox from "../news-box/news-box";
import NewsApi from "../../api-services/newsapi";
import s from "./top-headlines.module.css";

const categories = [
  {
    id: 2,
    name: "Business",
    key: "business",
  },
  {
    id: 3,
    name: "Science",
    key: "science",
  },
  {
    id: 4,
    name: "Entertainment",
    key: "entertainment",
  },
  {
    id: 1,
    name: "general",
    key: "",
  },
  {
    id: 5,
    name: "Technology",
    key: "technology",
  },
  {
    id: 6,
    name: "Sports",
    key: "sports",
  },
  {
    id: 7,
    name: "Health",
    key: "health",
  },
];

class TopHeadlines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      isLoading: true,
      totalResults: 0,
      activeCategoryId: 1,
      params: {
        pageSize: 40,
        category: "general",
      },
    };
    this.filterBycategory = this.filterBycategory.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData(params) {
    const query = params || this.state.params;
    NewsApi.topHeadlines(query)
      .then((response) => {
        this.setState({
          articles: response.articles,
          totalResults: response.totalResults,
        });
      })
      .catch((error) => console.error("error: ", error))
      .finally(() =>
        this.setState({
          isLoading: false,
        })
      );
  }

  filterBycategory(category) {
    if (this.state.category !== category.id) {
      this.setState(
        {
          activeCategoryId: category.id,
          params: Object.assign({}, this.state.params, {
            category: category.key,
          }),
        },
        () => this.fetchData()
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className={s.filterButtonsContainer}>
          <ul className={s.filterButtons}>
            {categories.map((category) => {
              const buttonClasses =
                this.state.activeCategoryId === category.id
                  ? `${s.filterButtonItem} ${s.active}`
                  : `${s.filterButtonItem}`;
              return (
                <li
                  key={category.id}
                  onClick={() => this.filterBycategory(category)}
                  className={buttonClasses}
                >
                  {category.name}
                </li>
              );
            })}
          </ul>
        </div>

        <NewsBox
          articles={this.state.articles}
          isLoading={this.state.isLoading}
        />
      </React.Fragment>
    );
  }
}

export default TopHeadlines;
