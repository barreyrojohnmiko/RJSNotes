import "./NotePanel.css";

const NotePanel = ({ storedData }: any) => {
  return (
    <div className="note-panel-main-container">
      <div className="note-panel-sub-container">
        <div className="note-panel-title"> {storedData.titleText} </div>
        <div className="note-panel-content"> {storedData.contentText} </div>
      </div>
    </div>
  );
};

export default NotePanel;
