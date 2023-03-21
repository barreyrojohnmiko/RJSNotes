import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  const location = useLocation();
  const storedData = location.state?.storedData;

  const handleGoHome = () => {
    dispatch(setTitleText(""));
    dispatch(setContentText(""));
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

  // Load the data from local storage or from the location state
  useEffect(() => {
    const storedTitleText =
      storedData?.titleText || localStorage.getItem("titleText");
    const storedContentText =
      storedData?.contentText || localStorage.getItem("contentText");

    if (storedTitleText) {
      dispatch(setTitleText(storedTitleText));
    }

    if (storedContentText) {
      dispatch(setContentText(storedContentText));
    }
  }, []);

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

    const allNotesData = { titleText, contentText, GUID: timestamp };
    localStorage.setItem("allNotesData", JSON.stringify(allNotesData));
  }, [timestamp, dispatch, titleText, contentText]);

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
            <button className="header-button-container">
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
