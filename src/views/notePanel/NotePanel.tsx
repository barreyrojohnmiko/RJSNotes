import React from "react";
import "./NotePanel.css";

import NotePanelDto from "../../objects/dto/NotePanelDto";

const NotePanel: React.FC<NotePanelDto> = ({ storedData }) => {
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
