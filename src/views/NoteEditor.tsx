import "./NoteEditor.css";

import { faArrowLeftLong, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NoteEditorObject from "../objects/interface/NoteEditorObject";

const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const day = date.toLocaleDateString("en-GB", { day: "2-digit" });
    const month = date.toLocaleDateString("en-GB", { month: "2-digit" });
    const year = date.toLocaleDateString("en-GB", { year: "numeric" });
    return `${day}/${month}/${year}`;
  };

const NoteEditor = (props: NoteEditorObject) => {
  return (
    <div className="note-editor-main-container">
      <div className="note-editor-header">
        <div className="note-editor-content-container">
          <button className="header-button-container" onClick={props.handleGoHome}>
            <FontAwesomeIcon
              icon={faArrowLeftLong}
              className="header-button-logo"
            />
          </button>
          {props.titleText !== "" || props.contentText !== "" ? (
            <button className="header-button-container" onClick={props.handleSave}>
              <FontAwesomeIcon icon={faCheck} className="header-button-logo" />
            </button>
          ) : null}
        </div>
      </div>

      <div className="note-editor-body">
        <div className="note-editor-details-font">
          Date Created: {formatDate(props.timestamp)} | {props.charactersCount} characters
        </div>
        <input
          type="text"
          className="note-editor-title-font-settings note-editor-text-field"
          placeholder="Title"
          value={props.titleText}
          onChange={props.handleTitleTextChange}
        />
        <input
          type="text"
          className="note-editor-content-font-settings note-editor-text-field"
          placeholder="Start typing"
          value={props.contentText}
          onChange={props.handleContentextChange}
        />
      </div>
    </div>
  );
};

export default NoteEditor;