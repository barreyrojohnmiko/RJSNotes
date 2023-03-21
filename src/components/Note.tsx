import "./Note.css";
import { useNavigate } from "react-router-dom";

import NotePanel from "../views/NotePanel";

const Note = () => {
  const navigate = useNavigate();
  const storedDataString = localStorage.getItem("allNotesData");
  const storedData = storedDataString ? JSON.parse(storedDataString) : null;

  const doOpenEditor = (data: any) => {
    navigate("add-note", { state: { storedData: data } });
  };

  return (
    <div className="note-main-container">
      <div className="note-flex-container">
        {storedData && storedData.map((data: any, index: number) => (
          <div key={index} className="note-panel-container" onClick={() => doOpenEditor(data)}>
            <NotePanel storedData={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Note;
