import { useNavigate } from "react-router-dom";
import "./Note.css";

import NotePanel from "../../views/notePanel/NotePanel";

import { useDispatch, useSelector } from "react-redux";
import { setModeStatus } from "../../redux/components/home/action";

const Note = () => {
  const navigate = useNavigate();

  const dispatch: any = useDispatch();
  const { filteredNotes } = useSelector((state: any) => state.headerReducers);

  const doOpenEditor = (data: any) => {
    navigate("edit-note", { state: { storedData: data } });
  };

  const handleOpenNotePanel = (data: any) => {
    doOpenEditor(data);
    dispatch(setModeStatus("edit"));
  };

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
