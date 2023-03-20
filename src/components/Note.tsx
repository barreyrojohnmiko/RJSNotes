import "./Note.css";

import { useNavigate } from "react-router-dom";

import NotePanel from "../views/NotePanel";

const Note = () => {
  const navigate = useNavigate();
  const storedTitleText = localStorage.getItem("titleText") || "";
  const storedContentText = localStorage.getItem("contentText") || "";

  const doOpenEditor = (storedData: any) => {
    navigate("add-note", { state: { storedData } });
  };

  return (
    <div className="note-main-container">
      <div className="note-flex-container">
        <div onClick={() => doOpenEditor({})}>
          <NotePanel storedData={{ titleText: storedTitleText, contentText: storedContentText }} />
        </div>
      </div>
    </div>
  );
};

export default Note;
