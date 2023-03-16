import React from "react";
import "./AddButton.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCirclePlus } from "@fortawesome/free-solid-svg-icons";

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
