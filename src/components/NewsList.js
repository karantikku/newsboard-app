import React from "react";
import NewsItem from "./NewsItem";

const NewsList = props => (
  <div>
    {props.news.length === 0 && <p>No Stories to show</p>}
    {props.news.map(newsItem => (
      <NewsItem
        key={newsItem.title}
        title={newsItem.title}
        author={newsItem.author}
        points={newsItem.points}
        url={newsItem.url}
      />
    ))}
  </div>
);

export default NewsList;
