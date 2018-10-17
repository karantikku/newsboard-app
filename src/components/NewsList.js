import React from "react";
import NewsItem from "./NewsItem";

const NewsList = props => (
  <div>
    {props.news.length === 0 && <p>No Stories to show</p>}
    {props.news.map(newsItem => {
      const hours_ago = Math.floor(
        (new Date().getTime() - new Date(newsItem.created_at).getTime()) /
          (30 * 24 * 60 * 60 * 1000)
      );
      return (
        <NewsItem
          key={Math.random()}
          title={newsItem.title}
          author={newsItem.author}
          points={newsItem.points}
          url={newsItem.url}
          created_at={newsItem.created_at}
          hours_ago={hours_ago}
          num_comments={newsItem.num_comments}
          objectID={newsItem.objectID}
        />
      );
    })}
  </div>
);

export default NewsList;
