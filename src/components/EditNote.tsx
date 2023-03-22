import { useLocation, useNavigate } from "react-router-dom";

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
    dispatch(setCharactersCount(0));
    navigate("/");
  };

  const handleTitleTextChange = (event: any) => {
    dispatch(setTitleText(event.target.value));
  };

  const handleContentextChange = (event: any) => {
    const charactersCountWithoutSpaces = event.target.value.replace(/\s+/g, "");
    dispatch(setContentText(event.target.value));
    dispatch(setCharactersCount(charactersCountWithoutSpaces.length));
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
    timestamp: storedData.GUID,
    charactersCount: storedData.charactersCount,
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
