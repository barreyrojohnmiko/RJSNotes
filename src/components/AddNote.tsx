import { useNavigate } from "react-router-dom";
import "./AddNote.css";

import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddNote = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="add-note-main-container">
      <button className="back-button-container" onClick={handleGoHome}>
        <FontAwesomeIcon icon={faArrowLeftLong} className="back-button-logo" />
      </button>
    </div>
  );
};

export default AddNote;
