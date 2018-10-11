import React from 'react';

const Title = (props) => (
    <div className="header">
      <div className="container">
        <h3 className="header__title">{props.title}</h3>
      </div>
    </div>
  );
  
  Title.defaultProps = {
    title: 'Search Hacker News'
  };
  
  export default Title;