import React from "react";
import "./Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-label">Notes</div>
      <div className="search-bar-container">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-bar-logo" />
        <input type="text" className="search-bar-text-field search-bar-font-settings" placeholder="Search notes"/>
        <button className="search-bar-remove-text-button-container">
          <FontAwesomeIcon icon={faX} className="search-bar-remove-text-button" />
        </button>
      </div>
    </div>
  );
};

export default Header;
