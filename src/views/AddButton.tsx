import { useNavigate } from "react-router-dom";
import "./AddButton.css";

import { faFileCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useDispatch } from "react-redux";
import { setModeStatus } from "../redux/components/Home/action";

const AddButton = () => {
  const navigate = useNavigate();

  const dispatch: any = useDispatch();

  const handleAddNote = () => {
    navigate("add-note");
    dispatch(setModeStatus("add"));
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
