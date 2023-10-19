import { useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  setCharactersCount,
  setContentText,
  setTimestamp,
  setTitleText,
  setUpdateNote,
  setIsPinned,
} from "../../redux/components/EditNote/action";

import NoteEditor from "../../views/noteEditor/NoteEditor";

const EditNote = () => {
  const dispatch: any = useDispatch();
  const { titleText, contentText, charactersCount, updateNote, isPinned } =
    useSelector((state: any) => state.editNoteReducers);

  const navigate = useNavigate();
  const location = useLocation();
  const storedData = location.state.storedData;

  useEffect(() => {
    dispatch(setTitleText(storedData.titleText));
    dispatch(setContentText(storedData.contentText));
    dispatch(setCharactersCount(storedData.charactersCount));
    dispatch(setIsPinned(storedData.isPinned));
  }, []);

  const clearStates = () => {
    dispatch(setTitleText(""));
    dispatch(setContentText(""));
    dispatch(setTimestamp(""));
    dispatch(setCharactersCount(0));
    dispatch(setUpdateNote(""));
    dispatch(setIsPinned(false));
  };

  const handleGoHome = () => {
    clearStates();
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

  const handleSave = (mode: string) => {
    const updatedData = {
      titleText: titleText,
      contentText: contentText,
      GUID: storedData.GUID,
      charactersCount: charactersCount,
      isPinned: isPinned,
    };

    // Get the existing notes data from localStorage
    const allNotesData = JSON.parse(
      localStorage.getItem("allNotesData") || "[]"
    );

    // Find the index of the note data to update based on the GUID value
    const noteIndex = allNotesData.findIndex(
      (noteData: any) => noteData.GUID === storedData.GUID
    );

    if (titleText !== "" || contentText !== "") {
      if (noteIndex !== -1) {
        // If the note data exists, update it
        allNotesData[noteIndex] = updatedData;
        localStorage.setItem("allNotesData", JSON.stringify(allNotesData));
        dispatch(setUpdateNote(updatedData));
      }
    } else {
      handleDelete();
    }

    if (mode === "back") {
      clearStates();
      navigate("/");
    }
  };

  const handleDelete = () => {
    const allNotesData = JSON.parse(
      localStorage.getItem("allNotesData") || "[]"
    );
    const filteredNotes = allNotesData.filter(
      (noteData: any) => noteData.GUID !== storedData.GUID
    );
    localStorage.setItem("allNotesData", JSON.stringify(filteredNotes));

    clearStates();
    navigate("/");
  };

  const handlePin = () => {
    dispatch(setIsPinned(!isPinned));
  }

  const editNoteData = {
    titleText: updateNote?.updateNote?.titleText ?? titleText,
    contentText: updateNote?.updateNote?.contentText ?? contentText,
    timestamp: storedData.GUID,
    charactersCount: updateNote?.updateNote?.charactersCount ?? charactersCount,
    isPinned: updateNote?.updateNote?.isPinned ?? isPinned,
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
        handlePin={handlePin}
      />
    </>
  );
};

export default EditNote;
