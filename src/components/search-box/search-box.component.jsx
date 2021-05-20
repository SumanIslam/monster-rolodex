import React, { Component } from 'react';
import '../search-box/search-box.styles.css'

export const SearchBox = ({ handleChange }) => {
  return(
    <div>
      <input className="search" type="search" placeholder='search monsters' onChange={handleChange}/>
    </div>
  )
}
