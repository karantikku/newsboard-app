import React from "react";

const NewsItem = props => (
  <div>
    <div>
      <h3>{props.title}</h3>
      <div>
        <div>{props.points}</div>
        <div>{props.author}</div>
        <div>{props.url}</div>
        <div>{props.hours_ago} hour(s) ago</div>
        <div>
          <a
            href={"https://news.ycombinator.com/item?id=" + `${props.objectID}`}
          >
            {props.num_comments}
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default NewsItem;
