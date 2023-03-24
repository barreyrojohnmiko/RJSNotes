import React from "react";
import "./NotePanel.css";

import NotePanelObject from "../../objects/interface/NotePanelObject";

const NotePanel: React.FC<NotePanelObject> = ({ storedData }) => {
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
