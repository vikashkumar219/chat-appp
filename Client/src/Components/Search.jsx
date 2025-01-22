import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Search here.." />
        <a href="#">
          <FontAwesomeIcon icon={faSearch} className="searchIcon" />
        </a>
      </div>
    </div>
  );
};

export default Search;
