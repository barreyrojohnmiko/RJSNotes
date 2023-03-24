import { useLocation, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  setCharactersCount,
  setContentText,
  setTitleText,
  setTimestamp,
  setUpdateNote,
} from "../../redux/components/editNote/action";

import NoteEditor from "../../views/noteEditor/NoteEditor";
import { useEffect } from "react";

const EditNote = () => {
  const dispatch: any = useDispatch();
  const { titleText, contentText, charactersCount, updateNote } = useSelector(
    (state: any) => state.editNoteReducers
  );

  const navigate = useNavigate();
  const location = useLocation();
  const storedData = location.state.storedData;

  useEffect(() => {
    dispatch(setTitleText(storedData.titleText));
    dispatch(setContentText(storedData.contentText));
    dispatch(setCharactersCount(storedData.charactersCount));
  }, []);

  const clearStates = () => {
    dispatch(setTitleText(""));
    dispatch(setContentText(""));
    dispatch(setTimestamp(""));
    dispatch(setCharactersCount(0));
    dispatch(setUpdateNote(""));
  };

  const handleGoHome = () => {
    dispatch(setTitleText(""));
    dispatch(setContentText(""));
    dispatch(setCharactersCount(0));
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
    const updatedData = {
      titleText: titleText,
      contentText: contentText,
      GUID: storedData.GUID,
      charactersCount: charactersCount,
    };

    // Get the existing notes data from localStorage
    const allNotesData = JSON.parse(
      localStorage.getItem("allNotesData") || "[]"
    );

    // Find the index of the note data to update based on the GUID value
    const noteIndex = allNotesData.findIndex(
      (noteData: any) => noteData.GUID === storedData.GUID
    );

    if (noteIndex !== -1) {
      // If the note data exists, update it
      allNotesData[noteIndex] = updatedData;
      localStorage.setItem("allNotesData", JSON.stringify(allNotesData));
      dispatch(setUpdateNote(updatedData));
    }

    clearStates();
    navigate("/");
  };

  const handleDelete = () => {
    const allNotesData = JSON.parse(localStorage.getItem("allNotesData") || "[]");
    const filteredNotes = allNotesData.filter((noteData: any) => noteData.GUID !== storedData.GUID);
    localStorage.setItem("allNotesData", JSON.stringify(filteredNotes));
    
    clearStates();
    navigate("/");
  };

  const editNoteData = {
    titleText: updateNote?.updateNote?.titleText ?? titleText,
    contentText: updateNote?.updateNote?.contentText ?? contentText,
    timestamp: storedData.GUID,
    charactersCount: updateNote?.updateNote?.charactersCount ?? charactersCount,
  };

  return (
    <>
      <NoteEditor
        {...editNoteData}
        handleGoHome={handleGoHome}
        handleDelete={handleDelete}
        handleSave={handleSave}
        handleTitleTextChange={handleTitleTextChange}
        handleContentextChange={handleContentextChange}
      />
    </>
  );
};

export default EditNote;
