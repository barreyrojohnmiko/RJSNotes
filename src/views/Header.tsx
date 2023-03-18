import React, { useState, useEffect } from "react";
import "./Header.css";

import { faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useDispatch, useSelector } from "react-redux";
import { setIsSearchTextCleared, setSearchText } from "../redux/views/Header/action";

const Header = () => {
  const dispatch: any = useDispatch();
  const { searchText, isSearchTextCleared } = useSelector((state: any) => state.headerReducers);

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

  // Header reactive on scroll
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsHeaderVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, isHeaderVisible]);

  useEffect(() => {
    const noteSection = document.querySelector(".note-section") as HTMLElement;
    if (noteSection) {
      noteSection.style.paddingTop = `${isHeaderVisible ? "140px" : "45px"}`;
    }
  }, [isHeaderVisible]);

  return (
    <header className={`header ${isHeaderVisible ? "header--visible" : "header--hidden"}`}>
      <div className="header-container">
        <div className="header-label">Notes</div>
        <div className="search-bar-container">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-bar-logo"/>
          <input
            type="text"
            className="search-bar-text-field search-bar-font-settings"
            placeholder="Search notes"
            value={searchText}
            onChange={handleSearchTextChange}
          />

          {isSearchTextCleared ? null : (
            <button className="search-bar-remove-text-button-container" onClick={clearSearchText}>
              <FontAwesomeIcon icon={faX} className="search-bar-remove-text-button"/>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;