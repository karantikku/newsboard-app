import React from "react";
import NewsItem from "./NewsItem";

const NewsList = props => (
  <div>
    {props.news.length === 0 && <p>No Stories to show</p>}
    {props.news.map(newsItem => {
      const hours_ago =
        (new Date().getTime() - new Date(newsItem.created_at).getTime()) /
        (30 * 24 * 60 * 60 * 1000);
      return (
        <NewsItem
          key={newsItem.title}
          title={newsItem.title}
          author={newsItem.author}
          points={newsItem.points}
          url={newsItem.url}
          hours_ago={Math.floor(hours_ago)}
        />
      );
    })}
  </div>
);

export default NewsList;
