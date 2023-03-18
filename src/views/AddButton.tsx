import "./AddButton.css";

import { faFileCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddButton = () => {
  return (
    <>
      <button className="add-button-container">
        <FontAwesomeIcon icon={faFileCirclePlus} className="add-button-logo" />
      </button>
    </>
  );
};

export default AddButton;
