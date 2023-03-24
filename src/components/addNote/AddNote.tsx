import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  setCharactersCount,
  setContentText,
  setTimestamp,
  setTitleText,
} from "../../redux/components/addNote/action";

import NoteEditor from "../../views/noteEditor/NoteEditor";

const AddNote = () => {
  const dispatch: any = useDispatch();
  const { titleText, contentText, timestamp, charactersCount } = useSelector(
    (state: any) => state.addNoteReducers
  );

  const navigate = useNavigate();

  const clearStates = () => {
    dispatch(setTitleText(""));
    dispatch(setContentText(""));
    dispatch(setTimestamp(""));
    dispatch(setCharactersCount(0));
  };

  const handleGoHome = () => {
    clearStates();
    localStorage.removeItem("titleText");
    localStorage.removeItem("contentText");
    localStorage.removeItem("GUID");
    localStorage.removeItem("charactersCount");
    navigate("/");
  };

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "Escape") {
        handleGoHome();
      }
    };
  
    document.addEventListener("keydown", handleKeyDown);
  
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleTitleTextChange = (event: any) => {
    dispatch(setTitleText(event.target.value));
  };

  const handleContentextChange = (event: any) => {
    const charactersCountWithoutSpaces = event.target.value.replace(/\s+/g, "");
    dispatch(setContentText(event.target.value));
    dispatch(setCharactersCount(charactersCountWithoutSpaces.length));
  };

  const handleSave = () => {
    const allNotesDataString = localStorage.getItem("allNotesData");
    const allNotesData = allNotesDataString
      ? JSON.parse(allNotesDataString)
      : [];
    const newNoteData = {
      titleText,
      contentText,
      GUID: timestamp,
      charactersCount,
    };
    allNotesData.push(newNoteData);
    localStorage.setItem("allNotesData", JSON.stringify(allNotesData));

    clearStates();
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
