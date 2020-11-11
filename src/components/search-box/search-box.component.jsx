import React from 'react'
import './search-box.styles.css'

export const SearchBox = props =>(
      <input type="search"
            className="search-box"
            placeholder={props.placeholder}
            onChange={props.changeHandler}
      />
);