import "./Note.css";
import { useNavigate } from "react-router-dom";

import NotePanel from "../views/NotePanel";

import { useSelector } from "react-redux";

const Note = () => {
  const navigate = useNavigate();
  const storedDataString = localStorage.getItem("allNotesData");

  const { filteredNotes } = useSelector((state: any) => state.headerReducers);

  const doOpenEditor = (data: any) => {
    navigate("edit-note", { state: { storedData: data } });
  };

  return (
    <div className="note-main-container">
      <div className="note-flex-container">
        {filteredNotes.map((data: any, index: number) => (
          <div key={index} className="note-panel-container" onClick={() => doOpenEditor(data)}>
            <NotePanel storedData={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Note;
