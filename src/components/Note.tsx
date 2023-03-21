import "./Note.css";
import { useNavigate } from "react-router-dom";

import NotePanel from "../views/NotePanel";

const Note = () => {
  const navigate = useNavigate();
  const storedDataString = localStorage.getItem("allNotesData");
  const storedData = storedDataString ? JSON.parse(storedDataString) : null;

  const doOpenEditor = (storedData: any) => {
    navigate("add-note", { state: { storedData } });
  };

  return (
    <div className="note-main-container">
      <div className="note-flex-container">
        <div onClick={() => doOpenEditor({})}>
          <NotePanel storedData={storedData} />
        </div>
      </div>
    </div>
  );
};

export default Note;
