import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Note.css";

import NotePanel from "../../views/notePanel/NotePanel";

import { useDispatch, useSelector } from "react-redux";
import { setModeStatus } from "../../redux/components/home/action";
import { setTimestamp } from "../../redux/components/addNote/action";

const Note = () => {
  const navigate = useNavigate();

  const dispatch: any = useDispatch();
  const { filteredNotes } = useSelector((state: any) => state.headerReducers);
  const { timestamp } = useSelector((state: any) => state.addNoteReducers);

  const doOpenEditor = (data: any) => {
    navigate("edit-note", { state: { storedData: data } });
  };

  const handleOpenNotePanel = (data: any) => {
    doOpenEditor(data);
    dispatch(setModeStatus("edit"));
  };

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

  const allNotesData = localStorage.getItem('allNotesData');
  if (allNotesData) {
    const parsedNotesData = JSON.parse(allNotesData);
    if (parsedNotesData === null) {
      localStorage.setItem('allNotesData', JSON.stringify([{ "titleText": "Greetings!", "contentText": "Welcome!\n\nPlease use the add note button located at the bottom right of the screen to start adding notes.\n\nIf notes are already existing, you can just import the .JSON file using the three-dots buttons at upper right part of the screen.", "GUID": timestamp, "charactersCount": 3 }]));
      window.location.reload();
    }
  } 
  else {
    localStorage.setItem('allNotesData', JSON.stringify([{ "titleText": "Greetings!", "contentText": "Welcome!\n\nPlease use the add note button located at the bottom right of the screen to start adding notes.\n\nIf notes are already existing, you can just import the .JSON file using the three-dots buttons at upper right part of the screen.", "GUID": timestamp, "charactersCount": 3 }]));
    window.location.reload();
  }
}, [timestamp, dispatch]);

  return (
    <div className="note-main-container">
      <div className="note-flex-container">
        {filteredNotes.map((data: any, index: number) => (
          <div key={index} className="note-panel-container" onClick={() => handleOpenNotePanel(data)}>
            <NotePanel storedData={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Note;
