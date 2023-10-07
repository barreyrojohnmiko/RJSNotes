import { useEffect, useState } from "react";
import "./Header.css";

import {
  faMagnifyingGlass,
  faX,
  faFileExport,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SettingsModal from "../settingsModal/SettingsModal";

import { useDispatch, useSelector } from "react-redux";
import {
  setIsHeaderVisible,
  setIsSearchTextCleared,
  setPrevScrollPos,
  setSearchText,
  setFilteredNotes,
  setIsEllipsisClicked,
} from "../../redux/views/Header/action";

const Header = () => {
  const dispatch: any = useDispatch();
  const {
    searchText,
    isSearchTextCleared,
    isHeaderVisible,
    prevScrollPos,
    isEllipsisClicked,
  } = useSelector((state: any) => state.headerReducers);

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

  const toggleEllipsis = () => {
    dispatch(setIsEllipsisClicked(!isEllipsisClicked));
  }

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

  const importLocalStorage = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.json';
    fileInput.onchange = (e) => {
      const selectedFile = (e.target as HTMLInputElement)?.files?.[0];

      if (selectedFile && selectedFile.name.endsWith('.json')) {
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const data = JSON.parse(reader.result as string);
            localStorage.setItem('allNotesData', JSON.stringify(data));
            alert('File uploaded successfully!');
            window.location.reload();
          } catch (error) {
            alert('Invalid JSON file!');
          }
        };
        reader.readAsText(selectedFile);
      } else {
        alert('Please select a valid .json file!');
      }
    };
    fileInput.click();
  };

  return (
    <header className={`header ${isHeaderVisible ? "header--visible" : "header--hidden"}`}>
      <div className="header-main-container">
        <div className="header-sub-container">
          <div className="header-label">Notes</div>
          <button className="export-logo-container" onClick={toggleEllipsis}>
            <FontAwesomeIcon icon={faEllipsisH} className="export-logo"/>
          </button>
        </div>
        <div className="settings-modal-section">
          <SettingsModal
            exportLocalStorage={exportLocalStorage}
            importLocalStorage={importLocalStorage}
          />
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
