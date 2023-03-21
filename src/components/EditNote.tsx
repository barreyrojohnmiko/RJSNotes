import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./EditNote.css";

import { useDispatch, useSelector } from "react-redux";
import {
  setCharactersCount,
  setContentText,
  setTimestamp,
  setTitleText,
} from "../redux/components/AddNote/action";

import NoteEditor from "../views/NoteEditor";

const EditNote = () => {
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

  const handleTitleTextChange = (event: any) => {
    dispatch(setTitleText(event.target.value));
  };

  const handleContentextChange = (event: any) => {
    dispatch(setContentText(event.target.value));
    dispatch(setCharactersCount(event.target.value.length));
  };

  const handleSave = () => {
    dispatch(setTitleText(""));
    dispatch(setContentText(""));
    dispatch(setTimestamp(""));
    dispatch(setCharactersCount(0));
    navigate("/");
  };

  const editNoteData = {
    titleText: titleText,
    contentText: contentText,
    timestamp: timestamp,
    charactersCount: charactersCount,
  };

  return (
    <>
      <NoteEditor
        {...editNoteData}
        handleGoHome={handleGoHome}
        handleSave={handleSave}
        handleTitleTextChange={handleTitleTextChange}
        handleContentextChange={handleContentextChange}
      />
    </>
  );
};

export default EditNote;
