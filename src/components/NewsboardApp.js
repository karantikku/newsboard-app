import React from "react";
import fetch from "node-fetch";
import Header from "./Header";
import NewsList from "./NewsList";
import SortBar from "./SortBar";

export class NewsboardApp extends React.Component {
  constructor(props) {
    super(props);
    this.onSort = this.onSort.bind(this);
    this.compareValues = this.compareValues.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.state = {
      news: []
    };
  }
 compareValues(key, order='desc') {
    return function(a, b) {
      if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
          return 0; 
      }
      let comparison = 0;
      if (a[key] > b[key]) {
        comparison = -1;
      } else if (a[key] < b[key]) {
        comparison = 1;
      }
      return comparison;
    };
  }
  onSort(sortBy) {
    if(sortBy) {
      if(sortBy === "Date") {
        let prevState = this.state;
        const news = prevState.news.sort(this.compareValues('hours_ago'));
        this.setState(() => ({
          news: news
        }));
      }
      else if(sortBy === 'Popularity') {
        let prevState = this.state;
        const news = prevState.news.sort(this.compareValues('points'));
        this.setState(() => ({
          news: news
        }));
      }
        
      } 
  } 
  onSearch(queryString) {
    this.setState({ isLoading: true });
    fetch(" http://hn.algolia.com/api/v1/search?query=`${queryString}`&tags=story")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then(data => {
        this.setState(prevState => ({
          news: data.hits,
          isLoading: false
        }));
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://hn.algolia.com/api/v1/search?query=&tags=story&page=0")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then(data => {
        this.setState(prevState => ({
          news: data.hits,
          isLoading: false
        }));
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }
  render() {
    const isLoading = this.state.isLoading;
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    const error = this.state.error;
    if (error) {
      return <p>{error.message}</p>;
    }
    return (
      <div>
        <Header onSearch={this.onSearch} />
        <SortBar onSort={this.onSort} />
        <NewsList news={this.state.news} />
      </div>
    );
  }
}
