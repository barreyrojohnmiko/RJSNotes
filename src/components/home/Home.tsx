import "./Home.css";

import AddButton from "../../views/addButton/AddButton";
import Header from "../../views/header/Header";
import Note from "../note/Note";

const Home = () => {
  return (
    <div className="home-container">
      <div className="header-section">
        <Header />
      </div>
      <div className="note-section">
        <Note />
      </div>
      <div className="add-button-section">
        <AddButton />
      </div>
    </div>
  );
};

export default Home;
