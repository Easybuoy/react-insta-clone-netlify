import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

import StyledSearchBar from "./StyledSearchBar";

export default function SearchBar({ handleSearch }) {
  return (
    <StyledSearchBar>
      <div className="logo">
        <i className="fab fa-instagram fa-3x" />
        <hr />
        <Link to="/loginuser"><p>Instagram</p></Link>
      </div>

      <div className="searchInput">
        <i className="fas fa-search" />
        <input placeholder="Search" onKeyUp={handleSearch} />
      </div>

      <div className="searchContent">
        <i className="far fa-compass fa-2x" />
        <i className="far fa-heart fa-2x" />
        <i className="far fa-user fa-2x" />
      </div>
    </StyledSearchBar>
  );
}

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired
};
