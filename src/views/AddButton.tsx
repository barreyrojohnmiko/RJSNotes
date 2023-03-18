import { useNavigate } from "react-router-dom";
import "./AddButton.css";

import { faFileCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddButton = () => {
  const navigate = useNavigate();

  const handleAddNote = () => {
    navigate("add-note");
  };

  return (
    <>
      <button className="add-button-container" onClick={handleAddNote}>
        <FontAwesomeIcon icon={faFileCirclePlus} className="add-button-logo" />
      </button>
    </>
  );
};

export default AddButton;
