import { useSelector } from "react-redux";
import SettingsModalObject from "../../objects/interface/SettingsModalObject";
import "./SettingsModal.css";

import { faDownload, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SettingsModal = (props: SettingsModalObject) => {
  const { isEllipsisClicked } = useSelector((state: any) => state.headerReducers);

  return (
    <div
      className={`settings-modal-main-container ${
        isEllipsisClicked
          ? "settings-modal-main-container--open"
          : "settings-modal-main-container--closed"
      }`}
    >
      <div className="settings-modal-sub-container">
        <div className="settings-item-content" onClick={props.importLocalStorage}>
          <button className="logo-container">
            <FontAwesomeIcon icon={faUpload} className="settings-logo" />
          </button>
          <div className="settings-label">Import</div>
        </div>

        <div className="settings-item-content" onClick={props.exportLocalStorage}>
          <button className="logo-container">
            <FontAwesomeIcon icon={faDownload} className="settings-logo" />
          </button>
          <div className="settings-label">Export</div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
