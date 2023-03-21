import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";
import {
  setCharactersCount,
  setContentText,
  setTimestamp,
  setTitleText,
} from "../redux/components/AddNote/action";

import NoteEditor from "../views/NoteEditor";

const EditNote = () => {
  const dispatch: any = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  const storedData = location.state.storedData;

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
    titleText: storedData.titleText,
    contentText: storedData.contentText,
    timestamp: storedData.timestamp,
    charactersCount: storedData.charactersCount,
  };

  useEffect(() => {
    console.log(storedData.titleText);
    console.log(storedData.contentText);
    console.log(storedData.timestamp?.toString());
    console.log(storedData.charactersCount);
  }, [storedData.titleText, storedData.contentText, storedData.timestamp, storedData.charactersCount])

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
