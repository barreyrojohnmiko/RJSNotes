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

import NoteEditor from "../views/NoteEditor";

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

  const addNoteData = {
    titleText: titleText,
    contentText: contentText,
    timestamp: timestamp,
    charactersCount: charactersCount,
  };

  return (
    <>
      <NoteEditor
        {...addNoteData}
        handleGoHome={handleGoHome}
        handleSave={handleSave}
        handleTitleTextChange={handleTitleTextChange}
        handleContentextChange={handleContentextChange}
      />
    </>
  );
};

export default AddNote;
