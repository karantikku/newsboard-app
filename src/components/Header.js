import React from 'react';
import Title from './Title';

const Header = (props) => (
    <div className="header">
      <div className="container">
       <Title />
       <div>
        <input type="text"
        placeholder="Search"
        onKeyPress={e => props.onSearch(e.target.value)}>
        </input>
        by algolia
       </div>
      </div>
    </div>
  );
  
  export default Header;
  