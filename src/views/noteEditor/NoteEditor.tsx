import "./NoteEditor.css";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextareaAutosize from "react-textarea-autosize";

import NoteEditorObject from "../../objects/interface/NoteEditorObject";

import { useSelector } from "react-redux";

const formatDate = (timestamp: string) => {
  const date = new Date(timestamp);
  const day = date.toLocaleDateString("en-GB", { day: "2-digit" });
  const month = date.toLocaleDateString("en-GB", { month: "2-digit" });
  const year = date.toLocaleDateString("en-GB", { year: "numeric" });
  return `${day}/${month}/${year}`;
};

const NoteEditor = (props: NoteEditorObject) => {
  const { modeStatus } = useSelector((state: any) => state.homeReducers);

  const renderAddModeHeader = () => {
    return (
      <div className="note-editor-header">
        <div className="note-editor-content-container">
          <button
            className="header-button-container"
            onClick={() => {
              props.handleSave("back");
            }}
          >
            <div className="header-button-back-logo">
              <div className="left-button"> &lt; </div>
              <div className="right-button"> Notes </div>
            </div>
          </button>
          {props.titleText !== "" || props.contentText !== "" ? (
            <button
              className="header-button-container"
              onClick={() => {
                props.handleSave("save");
              }}
            >
              <div className="header-button-text"> Done </div>
            </button>
          ) : null}
        </div>
      </div>
    );
  };

  const renderEditModeHeader = () => {
    return (
      <div className="note-editor-header">
        <div className="note-editor-content-container">
          <button
            className="header-button-container"
            onClick={() => {
              props.handleSave("back");
            }}
          >
            <div className="header-button-back-logo">
              <div className="left-button"> &lt; </div>
              <div className="right-button"> Notes </div>
            </div>
          </button>
          {props.titleText !== "" || props.contentText !== "" ? (
            <div className="header-button-right-container">
              <button
                className="header-button-container"
                onClick={props.handleDelete}
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  className="header-button-logo"
                />
              </button>
              <button
                className="header-button-container"
                onClick={() => {
                  props.handleSave("save");
                }}
              >
                <div className="header-button-text"> Save </div>
              </button>
            </div>
          ) : null}
        </div>
      </div>
    );
  };

  return (
    <div className="note-editor-main-container">
      {modeStatus === "add" ? renderAddModeHeader() : renderEditModeHeader()}

      <div className="note-editor-body">
        <div className="note-editor-details-font">
          Date Created: {formatDate(props.timestamp)} | {props.charactersCount}{" "}
          characters
        </div>
        <input
          type="text"
          className="note-editor-title-font-settings note-editor-text-area"
          placeholder="Title"
          value={props.titleText}
          onChange={props.handleTitleTextChange}
        />
        <TextareaAutosize
          className="note-editor-content-font-settings note-editor-text-area"
          placeholder="Start typing"
          value={props.contentText}
          onChange={props.handleContentextChange}
        />
      </div>
    </div>
  );
};

export default NoteEditor;
