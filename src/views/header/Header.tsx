import { useEffect } from "react";
import "./Header.css";

import { faMagnifyingGlass, faX, faFileExport, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useDispatch, useSelector } from "react-redux";
import { setIsHeaderVisible, setIsSearchTextCleared, setPrevScrollPos, setSearchText, setFilteredNotes } from "../../redux/views/header/action";

const Header = () => {
  const dispatch: any = useDispatch();
  const { searchText, isSearchTextCleared, isHeaderVisible, prevScrollPos } = useSelector((state: any) => state.headerReducers);

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
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      dispatch(setIsHeaderVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10));
      dispatch(setPrevScrollPos(currentScrollPos));
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

  useEffect(() => {
    const allNotesData = JSON.parse(localStorage.getItem("allNotesData") || "[]");
    const filteredNotes = allNotesData.filter((note: any) => note.titleText.toLowerCase().includes(searchText.toLowerCase()) || note.contentText.toLowerCase().includes(searchText.toLowerCase()));
    dispatch(setFilteredNotes(filteredNotes));
  }, [searchText, dispatch]);

  const exportLocalStorage = () => {
    const allNotesData = localStorage.getItem("allNotesData");
    if (allNotesData !== null) {
      const jsonData = JSON.stringify(JSON.parse(allNotesData));
      const dataBlob = new Blob([jsonData], { type: "application/json" });
      const url = URL.createObjectURL(dataBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "localStorageData.json";
      link.click();
    } else {
      alert("No data found in local storage.");
    }
  };

  return (
    <header className={`header ${isHeaderVisible ? "header--visible" : "header--hidden"}`}>
      <div className="header-main-container">
        <div className="header-sub-container">
          <div className="header-label">Notes</div>
          <button className="export-logo-container" onClick={exportLocalStorage}>
            <FontAwesomeIcon icon={faEllipsisH} className="export-logo"/>
          </button>
        </div>
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
