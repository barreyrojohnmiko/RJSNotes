import React, { useEffect } from "react";
import "./Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import {
  setSearchText,
  setIsSearchTextCleared,
} from "../redux/views/Header/action";

const Header = () => {
  const dispatch: any = useDispatch();
  const { searchText, isSearchTextCleared } = useSelector(
    (state: any) => state.headerReducers
  );

  const handleSearchTextChange = (event: any) => {
    dispatch(setSearchText(event.target.value));
  };

  const clearSearchText = () => {
    dispatch(setSearchText(""));
    dispatch(setIsSearchTextCleared(true));
  };

  useEffect(() => {
    if (searchText !== "") {
      dispatch(setIsSearchTextCleared(false));
    } else {
      dispatch(setIsSearchTextCleared(true));
    }
  }, [searchText, dispatch]);

  return (
    <div className="header-container">
      <div className="header-label">Notes</div>
      <div className="search-bar-container">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-bar-logo" />
        <input
          type="text"
          className="search-bar-text-field search-bar-font-settings"
          placeholder="Search notes"
          value={searchText}
          onChange={handleSearchTextChange}
        />

        {isSearchTextCleared ? null : (
          <button
            className="search-bar-remove-text-button-container"
            onClick={clearSearchText}
          >
            <FontAwesomeIcon
              icon={faX}
              className="search-bar-remove-text-button"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
