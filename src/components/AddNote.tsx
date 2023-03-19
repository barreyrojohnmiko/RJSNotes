import { useNavigate } from "react-router-dom";
import "./AddNote.css";

import { faArrowLeftLong, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useDispatch, useSelector } from "react-redux";
import {
  setContentText,
  setTitleText,
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
    navigate("/");
  };

  const doSaveProgress = () => {};

  const handleTitleTextChange = (event: any) => {
    dispatch(setTitleText(event.target.value));
  };

  const handleContentextChange = (event: any) => {
    dispatch(setContentText(event.target.value));
  };

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
            <button
              className="header-button-container"
              onClick={doSaveProgress}
            >
              <FontAwesomeIcon icon={faCheck} className="header-button-logo" />
            </button>
          ) : null}
        </div>
      </div>

      <div className="add-note-body">
        <div className="add-note-details-font"> {timestamp} | {charactersCount} characters </div>
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
