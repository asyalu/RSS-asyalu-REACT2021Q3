import React from 'react';

const SearchBar = (): JSX.Element => (
  <div className="main__search-bar">
    <img className="main__search-bar-img" src="../../public/icons8-search.svg" alt="search" />
    <input type="text" className="main__search-bar-input" id="search-bar-input" placeholder="Search" />
  </div>
);

export default SearchBar;
