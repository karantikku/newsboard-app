import React from "react";
import fetch from "node-fetch";
import Header from "./Header";
import NewsList from "./NewsList";

export class NewsboardApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://hn.algolia.com/api/v1/search?tags=front_page")
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
        <Header />
        <NewsList news={this.state.news} />
      </div>
    );
  }
}
