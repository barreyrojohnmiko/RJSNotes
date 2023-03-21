import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AddNote.css";

import { faArrowLeftLong, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useDispatch, useSelector } from "react-redux";
import {
  setTitleText,
  setContentText,
  setTimestamp,
  setCharactersCount,
} from "../redux/components/AddNote/action";

const AddNote = () => {
  const dispatch: any = useDispatch();
  const { titleText, contentText, timestamp, charactersCount } = useSelector(
    (state: any) => state.addNoteReducers
  );

  const navigate = useNavigate();

  const handleGoHome = () => {
    dispatch(setTitleText(""));
    dispatch(setContentText(""));
    localStorage.removeItem("titleText");
    localStorage.removeItem("contentText");
    navigate("/");
  };

  const handleTitleTextChange = (event: any) => {
    dispatch(setTitleText(event.target.value));
  };

  const handleContentextChange = (event: any) => {
    dispatch(setContentText(event.target.value));
    dispatch(setCharactersCount(event.target.value.length));
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const day = date.toLocaleDateString("en-GB", { day: "2-digit" });
    const month = date.toLocaleDateString("en-GB", { month: "2-digit" });
    const year = date.toLocaleDateString("en-GB", { year: "numeric" });
    return `${day}/${month}/${year}`;
  };

  const handleSave = () => {
    const allNotesDataString = localStorage.getItem("allNotesData");
    const allNotesData = allNotesDataString
      ? JSON.parse(allNotesDataString)
      : [];
    const newNoteData = { titleText, contentText, GUID: timestamp };
    allNotesData.push(newNoteData);
    localStorage.setItem("allNotesData", JSON.stringify(allNotesData));
    dispatch(setTitleText(""));
    dispatch(setContentText(""));
    dispatch(setTimestamp(""));
    dispatch(setCharactersCount(0));
    navigate("/");
  };

  // Set the timestamp if it doesn't exist, and store the object of the data inside the array
  useEffect(() => {
    if (!timestamp) {
      const storedTimestamp = localStorage.getItem("GUID");
      if (storedTimestamp) {
        dispatch(setTimestamp(storedTimestamp));
      } else {
        const newTimestamp = new Date().toISOString();
        dispatch(setTimestamp(newTimestamp));
      }
    }
  }, [timestamp, dispatch]);

  return (
    <div className="add-note-main-container">
      <div className="add-note-header">
        <div className="add-note-content-container">
          <button className="header-button-container" onClick={handleGoHome}>
            <FontAwesomeIcon
              icon={faArrowLeftLong}
              className="header-button-logo"
            />
          </button>
          {titleText !== "" || contentText !== "" ? (
            <button className="header-button-container" onClick={handleSave}>
              <FontAwesomeIcon icon={faCheck} className="header-button-logo" />
            </button>
          ) : null}
        </div>
      </div>

      <div className="add-note-body">
        <div className="add-note-details-font">
          Date Created: {formatDate(timestamp)} | {charactersCount} characters
        </div>
        <input
          type="text"
          className="add-note-title-font-settings add-note-text-field"
          placeholder="Title"
          value={titleText}
          onChange={handleTitleTextChange}
        />
        <input
          type="text"
          className="add-note-content-font-settings add-note-text-field"
          placeholder="Start typing"
          value={contentText}
          onChange={handleContentextChange}
        />
      </div>
    </div>
  );
};

export default AddNote;
