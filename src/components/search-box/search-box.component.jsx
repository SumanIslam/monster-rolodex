import React from 'react';
import './search-box.styles.css';

const SearchBox = ({ handleChange }) => (
  <div>
    <input className="search" type="search" placeholder="search monsters" onChange={handleChange} />
  </div>
);

export default SearchBox;
